const reader = new FileReader();
const file = e.currentTarget.files[0];

reader.onloadend = () =>
  this.setState({ imageUrl: reader.result, imageFile: file});

if (file) {
  reader.readAsDataURL(file);
} else {
  this.setState({ imageUrl: "", imageFile: null });
}

const file = this.state.imageFile;

const formData = new FormData();
formData.append("album[title]", title);
// our backend can't handle a null image, so why even
if (file) formData.append("album[image]", file);

ApiUtil.createAlbum(formData, this.resetForm);
