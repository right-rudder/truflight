import os
import imageio.v3 as iio

source_dir = "C:/Users/guilh/Documents/rrm-projects/truflight/src/assets/test/"
output_dir = "C:/Users/guilh/Documents/rrm-projects/truflight/src/assets/test/"

for root, dirs, files in os.walk(source_dir):
  for filename in files:
      extension = os.path.splitext(filename)[1].lower()
      if extension in (".avif"):
          filepath = os.path.join(root, filename)
          output_filepath = os.path.join(output_dir, os.path.relpath(filepath, source_dir))
          output_filepath = os.path.splitext(output_filepath)[0] + ".webp"
          os.makedirs(os.path.dirname(output_filepath), exist_ok=True)
          try:
              img = iio.imread(filepath)
              iio.imwrite(output_filepath, img, extension=".webp")
          except (IOError, OSError, ValueError, TypeError) as e:
              print(f"Skipping {filepath}: not a valid image file. Error: {str(e)}")