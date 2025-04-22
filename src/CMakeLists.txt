cmake_minimum_required(VERSION 3.15)

project(qgis-native CXX)

set(CMAKE_CXX_STANDARD 17)

# Enable debug symbols for easier debugging
set(CMAKE_CXX_FLAGS_DEBUG "${CMAKE_CXX_FLAGS_DEBUG} -g")

# Find required libraries
find_package(Qt6 REQUIRED COMPONENTS Core Gui Xml Network Concurrent Core5Compat PrintSupport Widgets)
find_package(PROJ CONFIG REQUIRED)
find_package(GEOS CONFIG REQUIRED)
find_package(GDAL CONFIG REQUIRED)
find_package(expat CONFIG REQUIRED)
find_package(libzip CONFIG REQUIRED)
find_package(Protobuf CONFIG REQUIRED)
find_package(Qca CONFIG REQUIRED)
find_package(Qt6Keychain CONFIG REQUIRED)

# Find QGIS
find_path(QGIS_INCLUDE_DIR
  NAMES qgis.h
  PATHS /usr/local/include /opt/homebrew/include
  PATH_SUFFIXES qgis
)

find_library(QGIS_LIBRARY
  NAMES qgis_core
  PATHS /usr/local/lib /opt/homebrew/lib
  PATH_SUFFIXES qgis
)

# Add source files
set(QGIS_NATIVE_SOURCES
  src/qgis-js.cpp
  src/api/QgisApi.cpp
)

# Add the executable
add_executable(qgis-native ${QGIS_NATIVE_SOURCES})

# Include directories
target_include_directories(qgis-native PRIVATE ${QGIS_INCLUDE_DIR})

# Link libraries
target_link_libraries(qgis-native PRIVATE ${QGIS_LIBRARY})
target_link_libraries(qgis-native PRIVATE
  Qt6::Xml
  Qt6::Concurrent
  Qt6::Network
  Qt6::Core
  Qt6::Gui
  Qt6::Core5Compat
  Qt6::PrintSupport
  Qt6::Widgets
  PROJ::proj
  GEOS::geos_c
  GDAL::GDAL
  expat::expat
  protobuf::libprotobuf-lite
  libzip::zip
  Qt6Keychain::Qt6Keychain
  Qca
)

# Optional: Add debug symbols for easier debugging
if (CMAKE_BUILD_TYPE STREQUAL "Debug")
  set(CMAKE_CXX_FLAGS "${CMAKE_CXX_FLAGS} -g")
endif()
