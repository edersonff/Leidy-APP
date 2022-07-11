import styled from 'styled-components/native'
import Ionicons from '@expo/vector-icons/Ionicons';

export default function Filter({options, title}){
    return(
        <Container>
            <FilterContainer>
                <FilterText>{title}</FilterText>
                {options ? (<Ionicons style={{ color: '#A0A0A0', display: 'flex', alignItems: 'center' }} name="chevron-down-outline" size={10} />) : (<></>)}
            </FilterContainer>
            {options ? (
            <Modal>
                 {options.map((modal) => <ModalItem key={modal}>{modal}</ModalItem>) }
            </Modal>
            ) : (<></>)}
        </Container>
    )
}
const FilterContainer = styled.View`
    heigth: 50px;
    border: 1px solid #F4F4F4;
    border-radius: 25px;
    box-sizing: border-box;
    flex-direction: row;
    padding: 0 10px;
    align-items: center;
`
const FilterText = styled.Text`
    color: #A0A0A0;
    margin: 2px 10px;
    font-size: 14px;
`
const Modal = styled.View`
    position: absolute;
    width: 100%;
    backgroundColor: #fff;
    top: 100%;
    z-index: 300;
`
const ModalItem = styled.Text`
    width: 100%;
    text-align: center;
`
const Container = styled.View`
    position: relative;
    overflow: visible;
`