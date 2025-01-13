import { View, Text } from "@tamagui/core";
import { Card } from "tamagui";
import { FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";

// データを分離
const SHOP_DATA = [
  {
    id: 1,
    name: "店舗1",
    location: "東京都新宿",
  },
  {
    id: 2,
    name: "店舗2",
    location: "東京都新宿",
  },
  {
    id: 3,
    name: "店舗3",
    location: "東京都新宿",
  },
];

// 店舗カードコンポーネントを分離
function ShopCard({ name, location }: { name: string; location: string }) {
  return (
    <Card
      bordered
      size="$3"
      animation="bouncy"
      shadowColor="$gray8"
      shadowOffset={{ width: 0, height: 2 }}
      shadowOpacity={0.25}
      shadowRadius={2}
    >
      <Card.Header flexDirection="row" gap="$2">
        <View
          width={48}
          height={48}
          backgroundColor="$gray5"
          borderRadius="$2"
        />
        <View flex={1} gap="$1">
          <View flex={1} flexDirection="row" alignItems="center">
            <View flex={1}>
              <Text fontSize="$4" fontWeight="bold">
                {name}
              </Text>
              <Text fontSize="$2" color="$gray11">
                {location}
              </Text>
            </View>
            <Ionicons name="map-outline" size={16} color="$gray11" />
          </View>
        </View>
      </Card.Header>
    </Card>
  );
}

type ShopData = (typeof SHOP_DATA)[0];

export default function TabOneScreen() {
  const renderItem = ({ item }: { item: ShopData }) => (
    <ShopCard name={item.name} location={item.location} />
  );

  return (
    <FlatList
      data={SHOP_DATA}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      contentContainerStyle={{ padding: 16 }}
      ItemSeparatorComponent={() => <View height={10} />}
    />
  );
}
