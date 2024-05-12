from PIL import Image
import os

def convert_images(directory, output_directory, target_size=(400, 600)):
    if not os.path.exists(output_directory):
        os.makedirs(output_directory)

    for filename in os.listdir(directory):
        if filename.endswith(('.png', '.jpg', '.jpeg')):
            img_path = os.path.join(directory, filename)
            img = Image.open(img_path)
            img = img.resize(target_size, Image.Resampling.LANCZOS)

            output_path = os.path.join(output_directory, filename.split('.')[0] + '.webp')
            img.save(output_path, 'webp')

directory = './src/images/settlement_deck'
output_directory = './src/images/settlement_deck/webp'
convert_images(directory, output_directory)