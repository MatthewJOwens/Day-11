class Collectable {
  constructor(image, title, description, rarity, tags) {
    this.image = image
    this.title = title
    this.description = description
    this.rarity = rarity
    this.tags = tags
  }

  addTag(tag) {
    this.tags.push(tag)
  }

  removeTag(tag) {
    if (this.tags.indexOf(tag) > -1) {
      this.tags.splice(this.tags.indexOf(tag), 1)
    } else {
      alert("This tag doesn\'t exist.")
    }

  }
}