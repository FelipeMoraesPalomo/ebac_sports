import { useSelector } from 'react-redux'
import { Produto as ProdutoType } from '../App'
import Produto from '../components/Produto'
import { useGetProdutosQuery } from '../services/api'
import { RootReducer } from '../store'

import * as S from './styles'

const ProdutosComponent = () => {
  const { data: ListaProdutos, isLoading } = useGetProdutosQuery()
  const favoritos: ProdutoType[] = useSelector(
    (state: RootReducer) => state.carrinho.favoritos
  )

  const produtoEstaNosFavoritos = (produto: ProdutoType) => {
    const produtoId = produto.id
    const IdsDosFavoritos = favoritos.map((f) => f.id)

    return IdsDosFavoritos.includes(produtoId)
  }

  if (isLoading) return <h2>Carregando...</h2>

  return (
    <S.Produtos>
      {ListaProdutos?.map((produto) => (
        <Produto
          estaNosFavoritos={produtoEstaNosFavoritos(produto)}
          key={produto.id}
          produto={produto}
        />
      ))}
    </S.Produtos>
  )
}

export default ProdutosComponent
