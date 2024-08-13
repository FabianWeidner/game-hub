const getCroppedImageUrl = (url: string) => {
  // Prüfen, ob die URL bereits mit 'media/' beginnt
  if (!url.includes("media/")) {
    return url; // wenn nicht, gib die Original-URL zurück
  }

  const target = "media/";
  const index = url.indexOf(target) + target.length;
  return url.slice(0, index) + "crop/600/400/" + url.slice(index);
};

export default getCroppedImageUrl;
