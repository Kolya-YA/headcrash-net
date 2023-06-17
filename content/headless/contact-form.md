---
title: "Shreiben uns an!"
date: 2023-06-01

form:
    -   name: name
        label: "Ihr Name"
        autocomplete: name
        placeholder: "Ihr Name"
        req: true
        weight: 10
    -   name: email
        label: "E-Mail"
        autocomplete: email
        placeholder: "E-Mail"
        type: email
        req: true
        weight: 20
    -   name: phone
        label: "Tel"
        autocomplete: tel
        placeholder: "Tel"
        type: tel
        req: false
        weight: 30
    -   name: company
        label: "Ihr Firma"
        autocomplete: organization
        placeholder: "Ihr Firma"
        req: false
        weight: 40
    -   name: model
        label: "Betreff / Modell der Festplatte"
        placeholder: "Betreff / Modell der Festplatte"
        req: false
        weight: 50
    -   name: msg
        label: "Problembeschreibung"
        placeholder: "Problembeschreibung"
        type: textarea
        req: true
        weight: 60
    -   name: agree
        label: "Ich habe die [Datenschutzerklärung](/datenschutz) gelesen und akzeptiert."
        placeholder: "Problembeschreibung"
        type: checkbox
        req: true
        weight: 70

sendBtn:
    text: "Absenden"
---