
import os
from PIL import Image, ImageDraw, ImageOps


def round_corners(image, radius):
    # Create a mask with rounded corners
    mask = Image.new("L", image.size, 0)  # 'L' creates a grayscale image
    draw = ImageDraw.Draw(mask)
    draw.rounded_rectangle(
        [(0, 0), image.size], radius, fill=255  # Full opacity
    )
    
    # Apply the mask to the original image
    rounded_image = ImageOps.fit(image, mask.size, centering=(0.5, 0.5))
    rounded_image.putalpha(mask)  # Use the mask to create transparency in corners
    
    return rounded_image



# Load the larger image containing all cards
image_path = "./FalloutAssets/httpcloud3steamusercontentcomugc965354426650207886C63F844BE1B0877B0303A14563241A26E0CE8D2E.png"  # Update with your image path
image = Image.open(image_path)

# Define card dimensions (adjust based on your image)
card_width = 337.8  # Example width; update as needed
card_height = 523    # Example height; update as needed

corner_radius = 15

# Number of cards per row and column (adjust accordingly)
cards_per_row = 5  # Example; adjust based on your image
cards_per_column = 2  # Example; adjust based on your image

# Create the output folder if it doesn't exist
output_folder = "./cropped14"  # Define the output folder
os.makedirs(output_folder, exist_ok=True)  # Create the folder

# Iterate over each card position and extract individual card
for row in range(cards_per_column):
    for col in range(cards_per_row):
        # Calculate coordinates for cropping
        left = col * card_width
        top = row * card_height
        right = left + card_width
        bottom = top + card_height
        
        # Crop the individual card
        card = image.crop((left, top, right, bottom))

        card_rounded = round_corners(card, corner_radius)
        
        # Save each cropped card with a unique name
        card_rounded.save(f"{output_folder}/card_{row}_{col}.png")
