// Workaround to support footnotes within the Markdown parser
// Ref: github.com/raphlinus/pulldown-cmark/issues/142

const references = document.getElementsByClassName("footnote-reference")

for (const reference of references) {
    const link = reference.firstChild
    const id = link.getAttribute("href").slice(1) // skip the '#'
    link.setAttribute("id", `${id}_ref`)
}

const footnotes = document.getElementsByClassName("footnote-definition")

for (const footnote of footnotes) {
    const id = footnote.getAttribute("id")
    const backReference = document.createElement("a")
    backReference.setAttribute("href", `#${id}_ref`)
    backReference.textContent = "↩"
    footnote.append(backReference)
}
