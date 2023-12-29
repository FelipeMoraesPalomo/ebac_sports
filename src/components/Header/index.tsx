import * as S from './styles'

import { Produto } from '../../App'

import cesta from '../../assets/cesta.png'
import { paraReal } from '../Produto'
import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const Header = () => {
  const itensNoCarrinho = useSelector(
    (state: RootReducer) => state.carrinho.itens
  )

  const favoritos = useSelector(
    (state: RootReducer) => state.carrinho.favoritos
  )

  const valorTotal = itensNoCarrinho.reduce((acc: number, item: Produto) => {
    acc += item.preco
    return acc
  }, 0)

  return (
    <S.Header>
      <h1>EBAC Sports</h1>
      <div>
        <span>{favoritos.length} favoritos</span>
        <img alt="cesta" src={cesta} />
        <span>
          {itensNoCarrinho.length} itens, valor total: {paraReal(valorTotal)}
        </span>
      </div>
    </S.Header>
  )
}

export default Header
