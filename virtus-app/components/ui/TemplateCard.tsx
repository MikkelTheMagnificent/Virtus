import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  Pressable,
  ImageSourcePropType,
  ViewStyle,
  StyleSheet as RNStyleSheet,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';
import cardBg from '../../assets/images/card-background.png';

type Exercise = { name: string; icon?: React.ReactNode };

type Props = {
  title: string;
  date?: string | Date;
  image: ImageSourcePropType; 
  bgImage?: ImageSourcePropType;
  exercises: Exercise[];
  onPress?: () => void;
  onMorePress?: () => void;
  style?: ViewStyle;
  width?: number;
  height?: number;
};

const palette = {
  gold: '#C89B06',
  cream: '#FEF3C7',
  dark: '#211B12',
};

function fmtDate(d?: string | Date) {
  if (!d) return '';
  const date = typeof d === 'string' ? new Date(d) : d;
  const months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
  return `${String(date.getDate()).padStart(2,'0')} ${months[date.getMonth()]} ${date.getFullYear()}`;
}

export default function TemplateCard({
  title,
  date,
  image,
  bgImage = cardBg,
  exercises,
  onPress,
  onMorePress,
  style,
  width = 170,
  height = 250,
}: Props) {
  const dateText = fmtDate(date);

  const heroH = Math.round(height * 0.58);
  const listH = height - heroH;

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.card,
        { width, height },
        pressed && styles.cardPressed,
        style,
      ]}
    >
      {/* HERO */}
      <ImageBackground
        source={image}
        style={[styles.hero, { height: heroH }]}
        resizeMode="cover"
        imageStyle={styles.heroImage}
      >
        <LinearGradient
          colors={['rgba(0,0,0,0.0)','rgba(0,0,0,0.35)','rgba(0,0,0,0.6)']}
          locations={[0, 0.6, 1]}
          style={RNStyleSheet.absoluteFillObject}
        />

        {/* Header: title + more */}
        <View style={styles.headerRow}>
          <Text style={styles.title} numberOfLines={2} ellipsizeMode="tail">
            {title?.toUpperCase()}
          </Text>

          <Pressable onPress={onMorePress} hitSlop={8} style={styles.moreBtn}>
            <Ionicons name="ellipsis-horizontal" size={18} color="rgba(255,255,255,0.9)" />
          </Pressable>
        </View>

        {!!dateText && (
          <View style={styles.dateRow}>
            <Ionicons name="time-outline" size={14} color="rgba(255,255,255,0.9)" />
            <Text style={styles.dateText}>{dateText}</Text>
          </View>
        )}
      </ImageBackground>

      {/* EXERCISES */}
      <View style={[styles.listWrap, { height: listH }]}>
        <ImageBackground
          source={bgImage}
          resizeMode="cover"
          style={[styles.listBgBleed, { height: listH }]}
        />
        <View style={styles.listOverlay} />

        <View style={styles.listContent}>
          {exercises.slice(0, 3).map((ex, i) => (
            <View key={`${ex.name}-${i}`} style={[styles.exerciseRow, i < 2 && styles.rowDivider]}>
              <View style={styles.rowLeft}>
                {ex.icon ?? <Ionicons name="barbell" size={16} color={palette.gold} />}
              </View>
              <Text style={styles.exerciseText} numberOfLines={1}>
                {ex.name?.toUpperCase()}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 18,
    overflow: 'hidden',
    backgroundColor: 'transparent',
    shadowColor: '#000',
    shadowOpacity: 0.35,
    shadowRadius: 12,
    shadowOffset: { width: 0, height: 6 },
    elevation: 8,
    marginTop: 10,
  },
  cardPressed: {
    shadowOpacity: 0.22,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
    transform: [{ translateY: 1 }],
  },

  hero: {
    width: '100%',
    overflow: 'hidden',
  },
  heroImage: {
    borderTopLeftRadius: 18,
    borderTopRightRadius: 18,
  },

  headerRow: {
    position: 'absolute',
    top: 12,
    left: 12,
    right: 12,
    flexDirection: 'row',
    alignItems: 'flex-start',
    gap: 8,
  },
  title: {
    flex: 1,
    flexShrink: 1,
    fontFamily: 'Cinzel_700Bold',
    fontSize: 20,
    lineHeight: 24,
    letterSpacing: 0.5,
    color: palette.cream,
    textShadowColor: 'rgba(0,0,0,0.45)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 6,
  },
  moreBtn: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    backgroundColor: 'rgba(0,0,0,0.15)',
    alignSelf: 'flex-start',
  },

  dateRow: {
    position: 'absolute',
    bottom: 10,
    right: 10,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  dateText: {
    fontFamily: 'Poppins_500Medium',
    fontSize: 12,
    color: 'rgba(255,255,255,0.9)',
  },

  // ===== Exercises (bund) =====
  listWrap: {
    width: '110%',
    overflow: 'hidden',
    borderBottomLeftRadius: 18,
    borderBottomRightRadius: 18,
  },
  listContent: {
    paddingHorizontal: 12,
    paddingVertical: 10,
  },
  listOverlay: {
    ...RNStyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0,0,0,0.22)',
  },
  listBgBleed: {
    ...StyleSheet.absoluteFillObject,
    left: -2,
    right: -2,
  },
  exerciseRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
  },
  rowDivider: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: 'rgba(255,255,255,0.22)',
  },
  rowLeft: {
    width: 22,
    alignItems: 'center',
    marginRight: 8,
  },
  exerciseText: {
    flex: 1,
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 13,
    letterSpacing: 0.4,
    color: palette.cream,
  },
});
