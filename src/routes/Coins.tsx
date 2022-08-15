import {Link} from "react-router-dom";
import {useQuery} from "react-query";
import styled from "styled-components";
import {fetchCoins} from "../api";

const Container = styled.section`
  padding: 0 20px;
  max-width: 480px;
  margin: 0 auto;
`;
const Header = styled.header`
  height: 16vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Title = styled.h1`
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;
const CoinsList = styled.ul``;
const Coin = styled.li`
  background: white;
  color: ${(props) => props.theme.bgColor};
  border-radius: 15px;
  margin-bottom: 10px;

  a {
    display: flex;
    align-items: center;
    padding: 20px;
    transition: 0.1s ease-in;
  }

  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
      font-size: 1.1rem;
      font-weight: bold;
    }
  }
`;
const Loader = styled.span`
  text-align: center;
  display: block;
`;
const Img = styled.img`
  width: 35px;
  height: 35px;
  margin-right: 10px;
`;

interface ICoin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

function Coins() {
  const {isLoading, data} = useQuery<ICoin[]>("allCoins", fetchCoins);
  return (
    <Container>
      <Header>
        <Title>코인</Title>
      </Header>
      {isLoading ? (
        <Loader>Loading...</Loader>
      ) : (
        <CoinsList>
          {data?.slice(0, 20).map((coin) => (
            <Coin key={coin.id}>
              <Link
                to={{
                  pathname: `/${coin.id}`,
                  state: {name: coin.name},
                }}
              >
                <Img src={`https://static.upbit.com/logos/${coin.symbol}.png`}/>
                {coin.name} &rarr;
              </Link>
            </Coin>
          ))}
        </CoinsList>
      )}
    </Container>
  );
}

export default Coins;
