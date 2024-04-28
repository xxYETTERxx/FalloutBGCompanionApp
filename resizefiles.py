from PIL import Image
import os

# Path to the folder with images
folder_path = './src/images/misc_assets/temp'  # Your image folder
output_folder = './src/images/misc_assets'  # Output folder
desired_size = (256, 256)  # Modify to desired size

if not os.path.exists(output_folder):
    os.makedirs(output_folder)

# Loop through files in the folder
for img_name in os.listdir(folder_path):
    if img_name.lower().endswith(('.png', '.jpg', '.jpeg')):
        # Open the image
        img_path = os.path.join(folder_path, img_name)
        img = Image.open(img_path)

        # Resize and center the image
        img.thumbnail(desired_size, Image.Resampling.LANCZOS)
        new_img = Image.new("RGBA", desired_size, (255, 255, 255, 0))
        offset = ((desired_size[0] - img.width) // 2, (desired_size[1] - img.height) // 2)
        new_img.paste(img, offset)

        # Save to the output folder
        output_path = os.path.join(output_folder, img_name)
        new_img.save(output_path)
