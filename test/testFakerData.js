var FakeObjectDataListStore = require('../utils/fakeObjectDataList')

class DataListWrapper {
  constructor(indexMap, data) {
    this._indexMap = indexMap;
    this._data = data;
  }

  getSize() {
    return this._indexMap.length;
  }

  getObjectAt(index) {
    return this._data.getObjectAt(
      this._indexMap[index]
    )
  }
}

var _dataList = new FakeObjectDataListStore(2000);
var filteredIndexes = [];


// for (var index = 0; index < _dataList.getSize(); index++) {
//     var {firstName} = this._dataList.getObjectAt(index);
//     if (firstName.toLowerCase().indexOf(filterBy) !== -1) {
//         filteredIndexes.push(index);
//     }
// }

if(typeof _dataList === "object") {
    console.log(_dataList.getAll())
    // console.log(_dataList._cache)
}