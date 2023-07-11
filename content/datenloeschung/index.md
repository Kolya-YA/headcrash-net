---
title: "Datenlöschung"
metaTitle: "Datenlöschung auf professionellem Niveau"
date: 2023-06-01

cover_img: "58-1.jpg"

menu:
  top:
      weight: 20
  service:
      weight: 20
---

## Sichere und endgültige Datenvernichtung und Datenlöschung
<!--more-->
Beim Entsorgen alter Speichermedien sollte man sicher gehen, dass dort keine Daten mehr existieren, die nicht in fremde Händen geraten sollen. Firmen und Unternehmen mit vertraulichen Daten sind sogar verpflichtet, die endgültige Vernichtung aller sensiblen Daten sicher zu stellen. Mit einer Bescheinigung über die endgültige Vernichtung der Speichermedien steht man auf der sicheren Seite.

ImageWir löschen Festplatten **sicher und unwiederbringlich** mit Hilfe der Degausser-Technik (starke Entmagnetisierung) gemäß Norm DIN 66399 oder mit spezieller Software. Dabei ist irrelevant, ob die Festplatte noch funktioniert oder defekt ist - alle Daten werden unwiederbringlich vernichtet. Danach haben selbst Datenfahnder keine Chance mehr, die Daten wieder her zu stellen.

Auf Wunsch bekommen Sie eine Bestätigung über die vernichteten Datenträger einzeln mit Seriennummer oder wir können, falls benötigt, die Datenlöschung durch unseren staatlich geprüften und vereidigten **EDV Sachverständigen** zertifizieren lassen.

Unser Angebot zur kostenlosen, professionellen Festplattenvernichtung gilt für Festplatten in größeren Mengen ab ca. 100 Stück, gerne auch in größeren Mengen. Als professionelle Datenrettungsfirma können wir damit unser Ersatzteilelager aufrüsten, woran wir ständig Bedarf haben. Innerhalb einer Festplatten-Serie gibt es meist mehrere Revisionen, d.h. es wurden verschiedene Bauteile eingebaut. Mitunter werden für eine einzelne Datenrettung bis zu 20 Festplatten als Ersatzteilespender benötigt. Deswegen macht eine kostenlose Festplatten-Löschung für uns nur in größeren Mengen Sinn.

Als letztes werden wir Ihre Datenträger fachgerecht entsorgen und für Altmetall und Rohstoffgewinnung recyceln. Aufgrund der verbauten Materialien dürfen Festplatten nicht über den Hausmüll entsorgt werden.

**Unser Angebot umfasst:**

- Professionelle und unwiederbringliche Datenvernichtung von aller Art Festplatten sowie Speicherkarten und USB-Speichersticks
- Bescheinigung über die fachgerechte Vernichtung nach Bundesdatenschutzgesetz BDSG auf Anfrage
- Bundesweite, kostenfreie Abholung, Kostenübernahme bei Versand aus dem Ausland
- Kostenübernahme bei Auslandsversand
- Fachgerechte Entsorgung der Festplatten für Altmetall und Rohstoffgewinnung.

### Software Datenlöschung

Das Angebot auf dem Markt für Software zur angeblich **sicheren Datenlöschung** ist groß. Wir haben mehrere Programme getestet und kamen zu dem Ergebnis, dass die Anwendungen in einigen Fällen KEINE Daten löschen konnten, obwohl der Löschvorgang von der Software als erfolgreich abgeschlossen wurde. Unseren Ingenieuren ist es gelungen, einige Dateien von **gelöschten Festplatten** wiederherzustellen, die zuvor mit Hilfe einer **"Sicheres Löschen" Software** und durch mehrfaches überschreiben gelöscht wurden. Die **Festplattenlöschung Software** arbeitet generell nur mit den Bereichen der Festplatte, die dem User zur Verfügung stehen und berücksichtigt dabei nicht die Bereiche, die vom User versteckt sind.

Eine der Sicherheitslücken bei Software zur Datenlöschung ist der Simple Host Protected Area (HPA) `SET_MAX_ADDRESS` ATA Befehl. über diesen ATA-Befehl wird der Festplatte mitgeteilt, welche Kapazität sie für Betriebssystem und Computer-BIOS melden soll. Manche Software speichert Daten mit Hilfe vom HPA Befehl in einem reserviertem Bereich der Festplatte und stellt diese Bereiche nur bei Bedarf temporär zur Verfügung. Die meiste sichere Datenlöschung Software löscht nicht die durch HPA versteckten Bereiche. Eine Ausnahme bildet das simple, kostenlose Unix/Linux "dd" Tool. Der Bootvorgang von Linux bietet standardmäßig eine Aufhebung der HPA zum Zugriff auf die volle, vom Hersteller bestimmte Festplattengröße. Dadurch können alle LBA-adressierten Sektoren gelöscht werden. Beispielsweise:

```sh
hda: Host Protected Area detected.
        current capacity is 118282236 sectors
        native  capacity is 156301488 sectors
hda: Host Protected Area disabled.
```

ähnlich zu der HPA gibt es bei einigen älteren Hauptplatinen eine integrierte Festplatten-Kapazität-Begrenzung, die durch das BIOS gesteuert wird. Dadurch setzt sich die Festplattengröße automatisch auf die von dem Hersteller unterstützte Kapazität - unabhängig davon wie groß die Festplatte tatsächlich ist. Wenn die Datenlöschung Software auf dem Rechner ausgeführt wird, kann nur der von der Hauptplatine zugeteilte Bereich gelöscht werden. In diesem Fall kann auch Linux nicht helfen. Die Daten in dem nicht unterstütztem Bereich bleiben ungelöscht.

Eine weitere Sicherheitslücke liegt an der Konstruktion der Festplatte. Ein Großteil älterer Festplatten besitzt zwei Listen für Sektoren, welche vom Betriebssystem der Festplatte als defekt oder schlecht lesbar eingestuft wurden. Diese Sektoren werden von der Festplattenlogik nicht mehr genutzt und ausgeschlossen. Die erste der Listen ist die P-Liste (Primary-List), diese wird beim Großteil aller Festplatten ab Werk während eines Selbsttests angelegt und schließt Sektoren aus, welche nicht benutzt werden. Die zweite Defektliste nennt sich G-List (Grown-List) und wird im laufenden Betrieb angelegt und ständig erweitert. Diese Liste markiert Datensektoren, die während des Betriebs schlechte Zugriffszeiten oder inkorrekte Checksummen liefern. Sektoren aus der G-Liste werden auf andere zuvor reservierte Bereiche der Festplatte umadressiert. Die alten Datensektoren aus der G-Liste bleiben ungelöscht auf dem Medium erhalten und werden aus der Translation ausgeschlossen. Die Datenvernichtungssoftware und Freeware arbeitet nur mit den Bereichen der Festplatte, welche als logisch verfügbar gelten und löschen also keine Sektoren aus der P- und G-Liste. Die vom Defektmanagement umadressierten Sektoren werden auch unter Linux nicht gelöscht. Keine Datenlöschung Software hat Optionen zum Entleeren von Defekt-Listen und zur sicheren Löschung von umadressierten Sektoren. Werden nun die Informationen aus der G-Liste durch eine Manipulation des Microcodes der Festplatte entleert, sind die Datensektoren wieder für jeden Datenpirat sichtbar und zwar auch wenn die Festplatte zuvor durch **mehrfaches überschreiben** gelöscht wurde.
