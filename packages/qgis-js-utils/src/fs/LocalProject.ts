import type { EmscriptenFS } from "qgis-js";

import { Project, PROJECTS_UPLOAD_DIR } from "./Project";

import {
  directoryOpen,
  FileWithDirectoryAndFileHandle,
} from "browser-fs-access";

export type LocalEntries = Array<FileWithDirectoryAndFileHandle>;

export { directoryOpen as openLocalDirectory };

export class LocalProject extends Project {
  protected entries: LocalEntries;

  constructor(FS: EmscriptenFS, entries: LocalEntries) {
    super(FS, "Local");

    this.entries = entries;

    const possibleNames = entries
      .map((e) => e.webkitRelativePath)
      .filter((p) => p && p.length > 0 && p.includes("/"))
      .map((p) => p.split("/", 1)[0]);

    if (possibleNames.length < 1) {
      throw new Error("Could not determine project name");
    }
    // just use the first possible name as final project name
    this.name = possibleNames[0];
  }

  getDirectories(): string[] {
    const subFoldersToCreate = new Set<string>();
    subFoldersToCreate.add(this.name);
    for (const entry of this.entries) {
      const path = (entry as FileWithDirectoryAndFileHandle).webkitRelativePath;
      subFoldersToCreate.add(path.substring(0, path.lastIndexOf("/")));
    }
    return Array.from(subFoldersToCreate);
  }

  getFiles(): string[] {
    return this.entries.map((e) => e.webkitRelativePath);
  }

  async uploadProject(): Promise<void> {
    // ensure directories exist
    this.ensureDirectories();
    // write files to the runtime FS
    for (const file of this.entries) {
      this.FS.writeFile(
        PROJECTS_UPLOAD_DIR + "/" + file.webkitRelativePath,
        new Uint8Array(await file.arrayBuffer()),
      );
    }
  }
  async getFileFromfs(path: string): Promise<Uint8Array> {
    console.log(this.entries[0].webkitRelativePath);
    const fullPath = PROJECTS_UPLOAD_DIR + "/" + this.entries[0].webkitRelativePath;
    try {
      const data = this.FS.readFile(fullPath);
      return data; // this is a Uint8Array
    } catch (e) {
      console.error("Failed to read file from MEMFS:", fullPath, e);
      throw e;
    }
  }
  async downloadAllFromFs(): Promise<void> {
    for (const file of this.entries) {
      const relativePath = file.webkitRelativePath;
      const fullPath = PROJECTS_UPLOAD_DIR + "/" + relativePath;
      try {
        const data = this.FS.readFile(fullPath); // Uint8Array
        const blob = new Blob([data]);
        const url = URL.createObjectURL(blob);
  
        const a = document.createElement("a");
        a.href = url;
        a.download = relativePath.split("/").pop()!; // just the filename
        a.style.display = "none";
  
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
      } catch (e) {
        console.error("Failed to download file:", fullPath, e);
      }
    }
  }


}
