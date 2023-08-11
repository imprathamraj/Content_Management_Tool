function dragStart(event) {
    event.dataTransfer.setData("text/plain", event.target.outerHTML);
  }
  
  function dragOver(event) {
    event.preventDefault();
  }
  
  function drop(event) {
    event.preventDefault();
    const content = event.dataTransfer.getData("text/plain");
    const blogArea = document.querySelector(".blog-area");
    blogArea.insertAdjacentHTML("beforeend", content);
  }
  
  function clearBlog() {
    const blogArea = document.querySelector(".blog-area");
    blogArea.innerHTML = '<h2>Blog Area</h2><p>Drag and drop content elements here to create your blog.</p>';
  }
  