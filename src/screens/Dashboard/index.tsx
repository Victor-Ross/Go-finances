import { HighlightCard } from '../../components/HighlightCard';
import {
  TransactionCard,
  TransactionCardProps,
} from '../../components/TransactionCard';
import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGretting,
  UserName,
  PowerIcon,
  HighlightCards,
  Transactions,
  Title,
  TransactionList,
} from './styles';

export type DataListProps = TransactionCardProps & {
  id: string;
};

export const Dashboard = () => {
  const data = [
    {
      id: '1',
      type: 'positive',
      title: 'Desenvolvimento de sitee',
      amount: 'R$ 12.000,00',
      category: { name: 'Vendas', icon: 'dollar-sign' },
      date: '13/04/2020',
    },
    {
      id: '2',
      type: 'negative',
      title: 'Hamburgueria Pizzy',
      amount: 'R$ 59,00',
      category: { name: 'Alimentação', icon: 'coffee' },
      date: '10/04/2020',
    },
    {
      id: '3',
      type: 'negative',
      title: 'Aluguel do apartamento',
      amount: 'R$ 1.200,00',
      category: { name: 'Casa', icon: 'shopping-bag' },
      date: '13/04/2020',
    },
  ] as DataListProps[];

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: 'https://avatars.githubusercontent.com/u/78884874?s=400&u=1e9cd84240fa377243568165be57492804184a3f&v=4',
              }}
            />
            <User>
              <UserGretting>Olá,</UserGretting>
              <UserName>Victor</UserName>
            </User>
          </UserInfo>
          <PowerIcon name="power" />
        </UserWrapper>
      </Header>
      <HighlightCards>
        <HighlightCard
          type="up"
          title="Entradas"
          amount="R$ 17.400,00"
          lastTransaction="Última entrada dia 13 de abril"
        />
        <HighlightCard
          type="down"
          title="Saídas"
          amount="R$ 1.259,00"
          lastTransaction="Última saída dia 03 de abril"
        />
        <HighlightCard
          type="total"
          title="Total"
          amount="R$ 16.141,00"
          lastTransaction="01 à 16 de abril"
        />
      </HighlightCards>

      <Transactions>
        <Title>Listagem</Title>
        <TransactionList
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />
      </Transactions>
    </Container>
  );
};
