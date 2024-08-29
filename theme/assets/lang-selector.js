// no specific html class so detecting what I can, prone to breaking
const $options = document.querySelectorAll('.md-select a[hreflang]')
const prefix = new RegExp('^/' + document.documentElement.lang)
const path = location.pathname.replace(prefix, '')

// adding prefix-less path to every option href in selector
const trimUrl = path => path.replace(/\/$/, '')
const detailLink = $a =>
    $a.setAttribute('href', trimUrl($a.getAttribute('href')) + path)

$options.forEach(detailLink)
