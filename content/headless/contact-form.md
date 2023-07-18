---
title: "Shreiben uns an!"
date: 2023-06-01

form:
    -   name: name
        label: "Ihr Name"
        autocomplete: name
        placeholder: "Ihr Name"
        maxlength: 128
        pattern: "^(?!\\s+$).+"
        errorMsg: "Bitte gültigen Namen angeben"
        req: true
        weight: 10
    -   name: email
        label: "E-Mail"
        autocomplete: email
        placeholder: "E-Mail"
        errorMsg: "Bitte gültige Email angeben"
        type: email
        req: true
        weight: 20
    -   name: phone
        label: "Telefon"
        autocomplete: "tel"
        placeholder: "Tel"
        pattern11: "[\\d\\s\\-–—+]{2,6}"
        errorMsg: 'Bitte gültige Telefonnummer angeben *(nur Ziffern, "-", "+" und Leerzeichen)*'
        title: 'Bitte gültige Telefonnummer angeben (nur Ziffern, "-", "+" und Leerzeichen)'
        type: tel
        req: false
        weight: 30
    -   name: company
        label: "Ihre Firma"
        autocomplete: organization
        placeholder: "Ihre Firma"
        maxlength: 256
        errorMsg: "Bitte gültige Info angeben"
        req: false
        weight: 40
    -   name: model
        label: "Betreff / Modell der Festplatte"
        placeholder: "Betreff / Modell der Festplatte"
        maxlength: 256
        errorMsg: "Bitte gültige Info angeben"
        req: false
        weight: 50
    -   name: msg
        label: "Problembeschreibung"
        placeholder: "Problembeschreibung"
        minlength: 6
        maxlength: 2048
        errorMsg: "Bitte gültigen Text angeben"
        type: textarea
        req: true
        weight: 60
    -   name: agree
        label: 'Ich habe die [Datenschutzerklärung]({{< relref "datenschutz" >}}) gelesen und akzeptiert'
        placeholder: "Problembeschreibung"
        errorMsg: "Bitte bestätigen Sie Ihre Zustimmung"
        type: checkbox
        req: true
        weight: 70

sendBtn:
    text: "Absenden"

succssesDialog:
    title: "Gesendet!"
    content: "Ihre Nachricht wurde erfolgreich gesendet und wird so schnell wie möglich bearbeitet."
    thanks: "Vielen Dank!"
---