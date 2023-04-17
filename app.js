let wrap = document.getElementsByClassName('wrap')[0]

wrap.onclick = () => {
    var center = document.getElementsByClassName('center')[0]
    center.style.display = 'none'
    wrap.style.display = 'none'

    var svg5 = document.getElementById('svg5')
    svg5.style.display = 'block'
}