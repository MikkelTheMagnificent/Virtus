// app/history.tsx
import React, { useCallback, useMemo } from 'react';
import { View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import { useRouter } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import HistoryCard, { HistoryCardProps } from '../../components/ui/HistoryCard';

const palette = {
  gold: '#C89B06',
  cream: '#F6EED9',
  dark: '#2A1B10',
  bgWarm: '#7A541E',
  bgDark: '#281604',
};

const MOCK: HistoryCardProps[] = [ // Dummy data
  {
    id: '1',
    title: 'Morning Training',
    dateISO: '2025-09-12',
    totalWeightKg: 140,
    durationMin: 60,
    exercises: ['Bench Press', 'Incline DB Press', 'Lat Pulldown', 'Row', 'Pushdown'],
  },
  {
    id: '2',
    title: 'Afternoon Training',
    dateISO: '2025-09-12',
    totalWeightKg: 140,
    durationMin: 60,
    exercises: ['Squat', 'Leg Press', 'RDL', 'Leg Curl', 'Leg Extension'],
  },
  {
    id: '3',
    title: 'Evening Training',
    dateISO: '2025-09-12',
    totalWeightKg: 140,
    durationMin: 60,
    exercises: ['OHP', 'Lateral Raise', 'Pull-up', 'Face Pull', 'Biceps Curl'],
  },
];

export default function HistoryScreen() {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  const data = useMemo(() => MOCK, []);

  const onPressCard = useCallback((id: string) => {
//    router.push(`/history/${id}`);
  }, []);

  return (
    <View style={styles.root}>
      <StatusBar barStyle="light-content" />
      <LinearGradient
        colors={[palette.bgDark, palette.bgWarm]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0, y: 1 }}
        style={StyleSheet.absoluteFill}
      />

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <HistoryCard {...item} onPress={onPressCard} />}
        ItemSeparatorComponent={() => <View style={{ height: 16 }} />}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingTop: insets.top + 12,
          paddingBottom: insets.bottom + 110,
          paddingHorizontal: 16,
        }}
        ListHeaderComponent={
          <Text style={[styles.h1, { textAlign: 'center', width: '100%', fontFamily: 'Cinzel_700Bold', fontSize: 30, marginBottom: 18, marginTop: 10 }]}>
            Ancient History
          </Text>
        }
        initialNumToRender={6}
        windowSize={7}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1 },
  h1: {
    color: palette.gold,
    fontSize: 28,
    fontWeight: '800',
    letterSpacing: 0.8,
    textTransform: 'uppercase',
  },
});
