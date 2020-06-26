import {
  faHome,
  faAtom,
  faCog,
  faChartLine as faChart,
  faUser
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon as FaIcon} from '@fortawesome/react-fontawesome';
import {Colors} from '../../config/styles';
import React from 'react';
import {SideBar as sideBar} from './styles';

const {NavMenus, NavMenuItems: Items, LabelMenuItems: LabelItem} = sideBar;
const {MenuIcon, SideBar: Side} = sideBar;

export default function SideBar(props) {
  return (
    <Side ref={props.reference}>
      <NavMenus>
        <Items className='MenuItem' href='/'>
          <MenuIcon>
            <FaIcon icon={faHome} color={Colors.background} size='2x' style={{width: 30}} />
          </MenuIcon>
          <LabelItem className='Label'>Home</LabelItem>
        </Items>
        <Items className='MenuItem' href='/app/admin'>
          <MenuIcon>
            <FaIcon icon={faUser} color={Colors.background} size='2x' style={{width: 30}} />
          </MenuIcon>
          <LabelItem className='Label'>Administrador</LabelItem>
        </Items>
        <Items className='MenuItem' href='/materias'>
          <MenuIcon>
            <FaIcon icon={faAtom} color={Colors.background} size='2x' style={{width: 30}} />
          </MenuIcon>
          <LabelItem className='Label'>Matérias</LabelItem>
        </Items>
        <Items className='MenuItem' href='/desempenho'>
          <MenuIcon>
            <FaIcon icon={faChart} color={Colors.background} size='2x' style={{width: 30}} />
          </MenuIcon>
          <LabelItem className='Label'>Desempenho</LabelItem>
        </Items>
        <Items className='MenuItem' href='/configuracoes'>
          <MenuIcon>
            <FaIcon icon={faCog} color={Colors.background} size='2x' style={{width: 30}} />
          </MenuIcon>
          <LabelItem className='Label'>Configurações</LabelItem>
        </Items>
      </NavMenus>
    </Side>
  );
}