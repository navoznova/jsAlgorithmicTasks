// TODO: complete this object/class

// The constructor takes in an array of items and a integer indicating how many
// items fit within a single page
function PaginationHelper(collection, itemsPerPage){
    this.arr = collection;
    this.itemsPerPage = itemsPerPage;
    this.itemCount;    
    this.pageCount;
  }
  
  // returns the number of items within the entire collection
  PaginationHelper.prototype.itemCount = function() {
    return this.arr.length;
  }
  
  // returns the number of pages
  PaginationHelper.prototype.pageCount = function() {
    return Math.ceil(this.arr.length / this.itemsPerPage);
  }
  
  // returns the number of items on the current page. page_index is zero based.
  // this method should return -1 for pageIndex values that are out of range
  PaginationHelper.prototype.pageItemCount = function(pageIndex) {
    let pageItemCount = (pageIndex >= this.pageCount()) ? -1 : (pageIndex == this.pageCount()-1)
                                                        ? this.arr.length % this.itemsPerPage : this.itemsPerPage;
    return pageItemCount;
  }
  
  // determines what page an item is on. Zero based indexes
  // this method should return -1 for itemIndex values that are out of range
  PaginationHelper.prototype.pageIndex = function(itemIndex) {
    return (itemIndex >= this.itemCount() || itemIndex < 0) ? -1 : (itemIndex == 0 && this.itemCount() == 0 )
                                                            ? -1 :  Math.trunc(itemIndex/this.itemsPerPage);
  }
  