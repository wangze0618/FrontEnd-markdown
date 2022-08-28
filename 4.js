const selectBox = document.querySelectorAll("[name^=c]")
const selectAllBox = document.querySelector("[name=selectAll]")
const fanxuanBox = document.querySelector("[name=fanxuan]")
selectBox.forEach((item, index) => {
  const count = 0
  item.addEventListener("click", () => {})
})

// 全选
selectAllBox.addEventListener("click", (e) => {
  selectBox.forEach((item, index) => {
    item["checked"] = true
  })
  if (!selectAllBox["checked"]) {
    selectBox.forEach((item, index) => {
      item["checked"] = false
    })
  }

  if (fanxuanBox["checked"]) {
    selectAllBox["checked"] = false
  }
})
// 反选
fanxuanBox.addEventListener("click", (e) => {
  selectBox.forEach((item, index) => {
    item["checked"] = !item["checked"]
  })
  if (fanxuanBox["checked"]) {
    selectAllBox["checked"] = false
  }
})
