function serializeArrayJson(form) {
  var obj = {}
  form.serializeArray().forEach((item) => {
    obj[item.name] = item.value
  });
  return obj
}
