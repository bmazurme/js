function getTagsFromString(str = '') {
  const rawTags = str.toLowerCase().split(' ');
  const tags = rawTags.map((tag) => tag ? `${tag[0].toUpperCase()}${tag.substring(1)}` : tag);

  return tags;
}

console.log(getTagsFromString());
console.log(getTagsFromString(''));
console.log(getTagsFromString('abc'));
console.log(getTagsFromString('abc def'));
