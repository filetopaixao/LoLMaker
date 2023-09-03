import React, {useState, useEffect, useCallback} from 'react';
import axios from 'axios';
import html2canvas from 'html2canvas';

import Contaier from './components/Container';
import ContaierButtons from './components/Container/containerButtons';
import ButtonsRow from './components/Container/buttonsRow';
import Card from './components/Card';
import Button from './components/Button';
import Modal from './components/Modal';
import Images from './components/Images';
import Selected from './components/Selected';
import Filter from './components/Filter';
import { Tooltip } from 'react-tooltip';

import './global.css';

const App = () => {
  const [patch] = useState('13.17.1');
  const [select, setSelect] = useState('');
  const [currentChampion, setCurrentChampion] = useState('');

  const [buttonChampion] = useState('Select a champion')
  const [buttonPassive] = useState('Select passive')
  const [buttonQ] = useState('Select ability')
  const [buttonW] = useState('Select ability')
  const [buttonE] = useState('Select ability')
  const [buttonR] = useState('Select ultimate')

  const [champions, setChampions] = useState([]);
  const [championsFiltered, setChampionsFiltered] = useState([]);
  const [abilities, setAbilitites] = useState([]);

  const [isVisible, setIsVisible] = useState(false);
  const [isVisibleAbilities, setIsVisibleAbilities] = useState(false);

  useEffect(()=>{
    axios.get(`http://ddragon.leagueoflegends.com/cdn/${patch}/data/en_US/champion.json`)
      .then(res => {
        setChampionsFiltered(Object.values(res.data.data))
        setChampions(Object.values(res.data.data))
      })
  }, [])

  const clickChampion = (img, champion) => {
    setCurrentChampion(img)
    if(select === 'button-champion' || select === 'button-passive' || select === 'button-R'){
      const buttonSelected = document.getElementById(select);
      const showSelected = document.getElementById(`${select}-selected`);
      buttonSelected.innerHTML = '';
      if(select === 'button-champion'){
        buttonSelected.style.background = `url(${img}) center center / cover`;
      }else if(select === 'button-passive'){
        showSelected.innerHTML = '';
        axios.get(`http://ddragon.leagueoflegends.com/cdn/${patch}/data/en_US/champion/${champion}.json`)
        .then(res => {
          buttonSelected.style.background = `url(http://ddragon.leagueoflegends.com/cdn/${patch}/img/passive/${res.data.data[champion].passive.image.full}) center center / cover`;
          showSelected.style.background = `url(${img}) center center / cover`;
        })
      }else if(select === 'button-R'){
        showSelected.innerHTML = '';
        axios.get(`http://ddragon.leagueoflegends.com/cdn/${patch}/data/en_US/champion/${champion}.json`)
        .then(res => {
          buttonSelected.style.background = `url(http://ddragon.leagueoflegends.com/cdn/${patch}/img/spell/${res.data.data[champion].spells[3].image.full}) center center / cover`;
          showSelected.style.background = `url(${img}) center center / cover`;
        })
      }
      setIsVisible(!isVisible);
    }else{
      setIsVisibleAbilities(!isVisibleAbilities);
      setAbilitites('Loading...');
      axios.get(`http://ddragon.leagueoflegends.com/cdn/${patch}/data/en_US/champion/${champion}.json`)
      .then(res => {
        const spells = res.data.data[champion].spells
        spells.splice(3, 1);
        setAbilitites(spells);
      })
    }
    
  }

  const clickAbility = (img, indice) => {
      const buttonSelected = document.getElementById(select);
      let key;
      if(indice === 0){
        key = 'Q';
      }else if(indice === 1){
        key = 'W';
      }else if(indice === 2){
        key = 'E';
      }
      const showSelectedChampion = document.getElementById(`${select}-selected`);
      const showSelectedKey = document.getElementById(`${select}-key`);
      buttonSelected.innerHTML = '';
      showSelectedKey.innerHTML = key;
      buttonSelected.style.background = `url(${img}) center center / cover`;
      showSelectedChampion.style.background = `url(${currentChampion}) center center / cover`;
      setIsVisible(!isVisible);
      setIsVisibleAbilities(!isVisibleAbilities);
  }

  const handlePrint = useCallback(() => {
    const div = document.querySelector('#lolmaker');
    html2canvas(div, {useCORS: true, ignoreElements: function (el) {
      if( el.id == 'button-generate') {
        return true;
    }
    }}).then((canvas) => {
      const img = canvas.toDataURL('image/jpeg', 1.0).replace('image/jpeg', 'image/octet-stream');
      const link = document.createElement('a');
      const d = new Date();
      const date = d.toLocaleDateString();
      const hours = `${d.getHours()}:${d.getMinutes()}`;
      link.download = `lolmaker-${date} ${hours}.jpeg`;
      link.href = img;
      link.click();
    });
  }, []);

  return (
    <Contaier>
      <div id="adsense"></div>
      <Card id="lolmaker">
        <ContaierButtons direction="column">
          <Button id="button-champion" size="champion" onClick={() => {
              setIsVisible(!isVisible);
              setSelect('button-champion')
            }}>
              {buttonChampion}
          </Button>
          <ButtonsRow>
            <div>
              <h3>Passive</h3>
              <Button id="button-passive" size="passive" onClick={() => {
                  setIsVisible(!isVisible);
                  setSelect('button-passive')
                }}>
                  {buttonPassive}
              </Button>
              <Selected id="button-passive-selected">
              </Selected>
            </div>
            <div>
              <h3>Q</h3>
              <Button id="button-Q" size="abilities" onClick={() => {
                  setIsVisible(!isVisible);
                  setSelect('button-Q')
                }}>
                  {buttonQ}
              </Button>
              <div>
                <Selected id="button-Q-key">
                </Selected>
                <Selected id="button-Q-selected">
                </Selected>
              </div>
            </div>
            <div>
              <h3>W</h3>
              <Button id="button-W" size="abilities" onClick={() => {
                  setIsVisible(!isVisible);
                  setSelect('button-W')
                }}>
                  {buttonW}
              </Button>
              <div>
                <Selected id="button-W-key">
                </Selected>
                <Selected id="button-W-selected">
                </Selected>
              </div>
            </div>
             <div>
              <h3>E</h3>
              <Button id="button-E" size="abilities" onClick={() => {
                  setIsVisible(!isVisible);
                  setSelect('button-E')
                }}>
                  {buttonE}
              </Button> 
              <div>
                <Selected id="button-E-key">
                </Selected>
                <Selected id="button-E-selected">
                </Selected>
              </div>
            </div>
            <div>
              <h3>R</h3>
              <Button id="button-R" size="abilities" onClick={() => {
                  setIsVisible(!isVisible);
                  setSelect('button-R')
                }}>
                  {buttonR}
              </Button>
              <div>
                <Selected id="button-R-selected">
                </Selected>
              </div>
            </div>
          </ButtonsRow>
          <ButtonsRow id="button-generate">
              <Button id="generate" generate onClick={() => handlePrint() }>
                  GENERATE
              </Button>
          </ButtonsRow>
          <ButtonsRow>
              <h2>Generated by LoLMaker.net</h2>
          </ButtonsRow>
        </ContaierButtons>
      </Card>
      <div id="adsense"></div>
      <Modal center variant="lg" btnCloser={true} id="modal-champions" isVisible={isVisible} onClose={() => setIsVisible(!isVisible)}>
        <div id="filter">
          <Filter onChange={(e) => {
            setChampionsFiltered(
              champions.filter(
                (champion) => {
                  if(champion.id.toLowerCase().includes(e.target.value)){
                    return champion;
                  }
                }
              )
            )
          }} />
        </div>
        {championsFiltered.map((champion) => 
        champion.image.full ?
            (
                <>
                    <Images src={`http://ddragon.leagueoflegends.com/cdn/${patch}/img/champion/${champion.image.full}`} onClick={(e) => {
                        clickChampion(e.target.currentSrc, champion.id)
                    }}
                    data-tooltip-id="champion"
                    data-tooltip-html={champion.name ? champion.name : ''}
                    data-tooltip-place="top"
                    />
                </>
            )
        : null
      )}
      <Tooltip id="champion" />
      </Modal>
      <Modal center variant="sm" btnCloser={true} id="modal-abilities" isVisible={isVisibleAbilities} onClose={() => setIsVisibleAbilities(!isVisibleAbilities)}>
        {!abilities? 'Loading...' :Object.entries(abilities).map((ability, key) => {
          return(
            <>
                <Images src={`http://ddragon.leagueoflegends.com/cdn/${patch}/img/spell/${ability[1].image ? ability[1].image.full : ''}`} onClick={(e) => {
                  clickAbility(e.target.currentSrc, key)
                }}
                        data-tooltip-id="speel-description"
                        data-tooltip-html={ability[1].description ? ability[1].description : ''}
                        data-tooltip-place="top"
                />
            </>
          )
        })}
        <Tooltip id="speel-description" />
      </Modal>
    </Contaier>
  );
}

export default App;
