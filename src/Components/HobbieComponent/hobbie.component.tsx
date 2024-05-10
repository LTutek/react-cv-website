import "./hobbie.component.css";
function HobbieComponent() {
  return (
    <>
      <h1 className="hobbieTitle">Hobbies</h1>
      <sdx-tabs style={{ marginTop: "20px" }}>
        <sdx-tabs-item label="Fitness" icon-name="icon-fitness">
          Das Fitnessstudio ist für mich ein Ort, an dem ich nach der Arbeit
          oder der Schule abschalten kann. Ich betrachte es als eine äusserst
          wichtige Freizeitaktivität.
        </sdx-tabs-item>
        <sdx-tabs-item label="Travel" icon-name="icon-suitcase">
          Reisen ist meine Leidenschaft, und ich strebe danach, so viele Orte
          wie möglich zu besuchen und zu erkunden.
        </sdx-tabs-item>
        <sdx-tabs-item label="Friends" icon-name="icon-crowd">
          An den Wochenenden treffe ich mich sehr gerne mit Freunden, um
          gemeinsam Zeit zu verbringen und schöne Momente zu erleben.
        </sdx-tabs-item>
        <sdx-tabs-item label="Gaming" icon-name="icon-gaming">
          In meiner Freizeit zu Hause spiele ich gerne Videospiele mit Freunden,
          um abzuschalten und Spass zu haben.
        </sdx-tabs-item>
        <sdx-tabs-item label="Reading" icon-name="icon-book">
          smth.
        </sdx-tabs-item>
      </sdx-tabs>
    </>
  );
}

export default HobbieComponent;
