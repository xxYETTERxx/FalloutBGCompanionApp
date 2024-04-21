import os
import shutil

# Paths to source image folder and output folder
source_folder = "./cropped12"
output_folder = "./tmp_library_deck"

# Ensure the output folder exists
os.makedirs(output_folder, exist_ok=True)

# Define an array with the new filenames (without extensions)
new_filenames = [
    "204",
    "205",
    "206",
    "207",
    "208",
    "209",
    "210",
    "211",
    "212",
    "213"
]

# Iterate over the new filenames and corresponding source files
for i, new_filename in enumerate(new_filenames):
    # Get the source file by index
    source_files = os.listdir(source_folder)  # List of source files
    
    # Check if the index is within the range of source files
    if i < len(source_files):
        source_file = source_files[i]

        # Set the full paths for the source file and new file
        source_path = os.path.join(source_folder, source_file)
        new_path = os.path.join(output_folder, f"{new_filename}.png")

        # Rename and move the file to the output folder
        shutil.copy(source_path, new_path)
    else:
        print(f"No source file found for index {i}.")
