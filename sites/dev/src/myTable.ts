import JSONEditor from "jsoneditor";

export const showJson=(LayerJson:string,container:HTMLElement)=>{
  const options = {};
  const editor = new JSONEditor(container, options);
  editor.set(LayerJson);
  return editor;
}
export const getLayerJson=(editor:JSONEditor)=>{
  return editor.get();
}
