function changeVetArtList() {
    //alert('Changed to' + document.getElementById('vetartList').value)
    var arr = ['Vet Surgery 1', 'Vet Surgery 2', 'Vet Surgery 3', 'Vet Surgery 4', 'Vet Surgery 5'];
    var cont = document.getElementById('vetartListResult');
    cont.replaceChildren();
    
    var ul = document.createElement('ul');
    ul.setAttribute('id', 'theList');
    var randomLength = Math.floor(Math.random() * 5) + 1;
    for (i = 0; i <= randomLength - 1; i++) {
    // for (i = 0; i <= arr.length - 1; i++) {
        var li = document.createElement('li');
        li.innerHTML = arr[i];

        ul.appendChild(li);
    }

    cont.appendChild(ul);
}