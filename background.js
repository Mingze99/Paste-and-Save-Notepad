function downloadFile(filename, content) {
    // It works on all HTML5 Ready browsers as it uses the download attribute of the <a> element:
    const element = document.createElement('a');

    //A blob is a data type that can store binary data
    // "type" is a MIME type
    // It can have a different value, based on a file you want to save
    const blob = new Blob([content], { type: 'plain/text' });

    //createObjectURL() static method creates a DOMString containing a URL representing the object given in the parameter.
    const fileUrl = URL.createObjectURL(blob);

    //setAttribute() Sets the value of an attribute on the specified element.
    element.setAttribute('href', fileUrl); //file location
    element.setAttribute('download', filename); // file name
    element.style.display = 'none';

    //use appendChild() method to move an element from one element to another
    document.body.appendChild(element);
    element.click();

    //The removeChild() method of the Node interface removes a child node from the DOM and returns the removed node
    document.body.removeChild(element);
};

window.addEventListener("load", function () {
    // do things after the DOM loads fully
    let btnSave = document.getElementById('btnSave');
    btnSave.onclick = function(){
        const filename = "Note.txt";

        //The value of what has been input in the textarea
        // let note = document.getElementById('note').value;
        // var element = document.querySelector("trix-editor")
        // element.editor  // is a Trix.Editor instance
        // var document = element.editor.getDocument();
        
        const content = document.getElementById('note').value;

        // The && (logical AND) operator indicates whether both operands are true. If both operands have nonzero values, the result has the value 1 . Otherwise, the result has the value 0.

        if (filename && content) {
            downloadFile(filename, content);
        }
    }
  });

window.onload = () => {
    // let btnSave = document.getElementById('btnSave');
    // btnSave.onclick = function(){
    //     const filename = "Note";

    //     //The value of what has been input in the textarea
    //     let note = document.getElementById('note').value;
    //     var element = document.querySelector("trix-editor")
    //     element.editor  // is a Trix.Editor instance
    //     var document = element.editor.getDocument();
        
    //     const content = note;

    //     // The && (logical AND) operator indicates whether both operands are true. If both operands have nonzero values, the result has the value 1 . Otherwise, the result has the value 0.

    //     if (filename && content) {
    //         downloadFile(filename, content);
    //     }
    // }

    // function save(){
    //     const filename = "Note";

    //     //The value of what has been input in the textarea
    //     let note = document.getElementById('note').value;
    //     var element = document.querySelector("trix-editor")
    //     element.editor  // is a Trix.Editor instance
    //     var document = element.editor.getDocument();
        
    //     const content = note;

    //     // The && (logical AND) operator indicates whether both operands are true. If both operands have nonzero values, the result has the value 1 . Otherwise, the result has the value 0.

    //     if (filename && content) {
    //         downloadFile(filename, content);
    //     }
    // }
        
    // btnSave.addEventListener('click', e => {

    //     //The value of the file name input box
    //     const filename = "Note";

    //     //The value of what has been input in the textarea
    //     let note = document.getElementById('note').value;
    //     var element = document.querySelector("trix-editor")
    //     element.editor  // is a Trix.Editor instance
    //     var document = element.editor.getDocument();
        
    //     const content = note;

    //     // The && (logical AND) operator indicates whether both operands are true. If both operands have nonzero values, the result has the value 1 . Otherwise, the result has the value 0.

    //     if (filename && content) {
    //         downloadFile(filename, content);
    //     }
    // });
};

