import React, { memo } from 'react';
import { View, Text, StyleSheet, Pressable, Image, ViewStyle } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const palette = {
  gold: '#C89B06',
  cream: '#F6EED9',
  cardBgFallback: '#2A2219',
  line: 'rgba(246,238,217,0.15)',
};

const CARD_BG = require('../../assets/images/card-background.png');
const CARD_ICON = require('../../assets/images/squat-spartan-logo.png');

const BG_BLEED_SCALE = 1.06;

export type HistoryCardProps = {
  id: string;
  title: string;
  dateISO: string;
  totalWeightKg: number;
  durationMin: number;
  exercises: string[];
  onPress?: (id: string) => void;
  style?: ViewStyle; // valgfrit: width/height udefra
};

function formatDate(d: string) {
  const date = new Date(d);
  return date.toLocaleDateString(undefined, { day: '2-digit', month: 'short', year: 'numeric' });
}

const HistoryCard = memo((props: HistoryCardProps) => {
  const { id, title, dateISO, totalWeightKg, durationMin, exercises, onPress, style } = props;

  return (
    <Pressable onPress={() => onPress?.(id)} style={[styles.cardShadow, style]}>
      <View style={styles.cardClip}>
        <Image
          source={CARD_BG}
          resizeMode="cover"
          style={styles.cardBackgroundImage}
        />

        {/* Indhold */}
        <View style={styles.content}>
          {/* Header */}
          <View style={styles.headerRow}>
            <Text style={styles.title}>{title}</Text>
            <Ionicons name="ellipsis-horizontal" size={18} color={palette.cream} />
          </View>

          {/* Body */}
          <View style={styles.bodyRow}>
            {/* Venstre kolonne: Total weight + logo */}
            <View style={styles.leftCol}>
              <Text style={styles.kv}>
                <Text style={styles.kLabel}>Total weight: </Text>
                <Text style={styles.kValue}>{totalWeightKg} kg</Text>
              </Text>

              <Image
                source={CARD_ICON}
                resizeMode="contain"
                style={styles.logo}
              />
            </View>

            {/* Højre kolonne: øvelser */}
            <View style={styles.rightCol}>
              <Text style={[styles.kLabel, { marginBottom: 6, fontWeight: '700' }]}>Exercise:</Text>
              {exercises.slice(0, 5).map((ex, i) => (
                <Text key={i} style={styles.exerciseLine} numberOfLines={1}>
                  {ex}
                </Text>
              ))}
            </View>
          </View>

          {/* Footer */}
          <View style={styles.footerRow}>
            <View style={styles.footerItem}>
              <Ionicons name="time-outline" size={14} color={palette.cream} />
              <Text style={styles.footerText}>Time spent: {durationMin} minutes</Text>
            </View>
            <View style={styles.footerItem}>
              <Ionicons name="calendar-outline" size={14} color={palette.cream} />
              <Text style={styles.footerText}>{formatDate(dateISO)}</Text>
            </View>
          </View>
        </View>
      </View>
    </Pressable>
  );
});

const styles = StyleSheet.create({
  cardShadow: {
    borderRadius: 18,
    shadowColor: '#000',
    shadowOpacity: 0.25,
    shadowRadius: 10,
    shadowOffset: { width: 0, height: 6 },
    elevation: 8,
    backgroundColor: 'transparent',
  },
  cardClip: {
    borderRadius: 18,
    overflow: 'hidden',
    backgroundColor: palette.cardBgFallback,
  },

  cardBackgroundImage: {
    ...StyleSheet.absoluteFillObject,
    transform: [{ scale: BG_BLEED_SCALE }],
  },

  content: {
    padding: 14,
  },

  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  title: {
    flex: 1,
    color: palette.cream,
    fontSize: 16,
    fontWeight: '700',
    letterSpacing: 0.3,
    textTransform: 'uppercase',
  },
  bodyRow: {
    flexDirection: 'row',
    paddingVertical: 8,
    borderTopWidth: StyleSheet.hairlineWidth,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: palette.line,
  },
  kv: { color: palette.cream, marginBottom: 8 },
  kLabel: { color: palette.cream, opacity: 0.9, fontSize: 13 },
  kValue: { color: palette.cream, fontWeight: '700' },
  exerciseLine: { color: palette.cream, fontSize: 13, lineHeight: 20, opacity: 0.95 },
  footerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
  },
  footerItem: { flexDirection: 'row', alignItems: 'center', gap: 6 },
  footerText: { color: palette.cream, fontSize: 12, opacity: 0.9 },

  // Ikon
  leftCol: { flex: 1, paddingRight: 12, alignItems: 'flex-start' },
  rightCol: { flex: 1 },
  logo: { width: 100, height: 100, marginTop: 6, opacity: 0.95, marginLeft: 30 },
});

export default HistoryCard;
