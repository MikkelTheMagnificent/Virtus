import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, FlatList, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import TemplateCard from '@/components/ui/TemplateCard';
import templateBg from '../../assets/images/template-background-logo.png';
import { Feather } from '@expo/vector-icons';

const palette = {
  bgDark: '#281604',
  bgWarm: '#8C6016',
  gold: '#C89B06',
  cream: '#FEF3C7',
  dark: '#211B12',
};

// Layout-konstanter
const SCREEN_WIDTH = Dimensions.get('window').width;
const H_PADDING = 16; 
const SPACING = 16;
const COLUMNS = 2;

const CARD_WIDTH = Math.floor(
  (SCREEN_WIDTH - H_PADDING * 2 - (COLUMNS - 1) * SPACING) / COLUMNS
);
const CARD_HEIGHT = Math.round(CARD_WIDTH * 1.55);

const templates = [ // Dummy data
  {
    id: '1',
    title: 'Full Body Blast',
    date: '2025-10-12',
    image: templateBg,
    exercises: [{ name: 'Exercise 1' }, { name: 'Exercise 2' }, { name: 'Exercise 3' }],
  },
  {
    id: '2',
    title: 'Template Name',
    date: '2025-09-12',
    image: templateBg,
    exercises: [{ name: 'Exercise 1' }, { name: 'Exercise 2' }, { name: 'Exercise 3' }],
  },
];





export default function StartWorkoutScreen() {
  const handleStartWorkout = () => console.log('Workout started');
  const handleAddTemplate = () => console.log('Add template');

  return (
    <LinearGradient
      colors={[palette.bgDark, palette.bgWarm, palette.bgDark]}
      locations={[0.1, 1, 1]}
      start={{ x: 0.5, y: 0 }}
      end={{ x: 0.5, y: 1 }}
      style={styles.container}
    >
      <StatusBar style="light" />

      {/* Quick Start */}
      <Text style={styles.sectionTitle}>START WORKOUT</Text>
      <View style={styles.divider} />

      {/* Start workout button */}
      <TouchableOpacity style={styles.startButton} onPress={handleStartWorkout}>
        <Text style={styles.startButtonText}>START AN EMPTY WORKOUT</Text>
      </TouchableOpacity>

      {/* Templates header */}
      <View style={styles.templatesHeader}>
        <Text style={styles.TemplateTitle}>Templates</Text>

       <TouchableOpacity
          onPress={handleAddTemplate}
          style={styles.templateAddBtn}
          activeOpacity={0.85}
          hitSlop={{ top: 8, bottom: 8, left: 8, right: 8 }}
        >
          <View style={styles.plusBadge}>
            <Feather name="plus" size={16} color={"#C89B06"} />
          </View>
          <Text style={styles.templateAddText}>Add New Template</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.separator} />

      {/* Liste med templates */}
      <FlatList
        data={templates}
        keyExtractor={(item) => item.id}
        numColumns={COLUMNS}
        contentContainerStyle={{
          paddingHorizontal: H_PADDING,
          alignItems: 'center',      
          justifyContent: 'center',  
          paddingBottom: 32,         
        }}
        columnWrapperStyle={{ gap: SPACING }}
        renderItem={({ item }) => (
          <TemplateCard
            title={item.title}
            date={item.date}
            image={item.image}
            exercises={item.exercises}
            width={CARD_WIDTH}
            height={CARD_HEIGHT}
            style={{ marginBottom: SPACING }}
            onPress={() => console.log('open template')}
            onMorePress={() => console.log('more menu')}
          />
        )}
        showsVerticalScrollIndicator={false}
      />
    </LinearGradient>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20, 
  },

  sectionTitle: {
    fontFamily: 'Cinzel_700Bold',
    fontSize: 30,
    letterSpacing: -0.5,
    color: '#C89B06',
    textAlign: 'center',
    marginTop: 60,
    marginBottom: 6,
    textShadowColor: 'rgba(0,0,0,0.35)',
    textShadowOffset: { width: 0, height: 2 },
    textShadowRadius: 6,
    includeFontPadding: false,
  },

  divider: {
    height: 2,
    backgroundColor: 'rgba(255,255,255,0.15)',
    width: '40%',
    alignSelf: 'center',
    marginBottom: 12,
    borderRadius: 1,
  },

  startButton: {
    backgroundColor: '#211B12',
    paddingVertical: 14,
    borderRadius: 20,
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOpacity: 0.55,
    shadowRadius: 8,
    shadowOffset: { width: 0, height: 3 },
    elevation: 4,
  },
  startButtonText: {
    color: '#C89B06',
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 16,
    letterSpacing: 0.8,
    textTransform: 'uppercase',
    includeFontPadding: false,
  },

  separator: {
  height: 1,
  backgroundColor: 'rgba(255,255,255,0.25)', 
  marginVertical: 8, 
  width: '100%',
  alignSelf: 'center',
},


  templatesHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 8,
  },
  TemplateTitle: {
    fontFamily: 'Cinzel_600SemiBold',
    fontSize: 24,
    letterSpacing: -0.3,
    color: '#FEF3C7',
  },

  templateAddBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    backgroundColor: '#211B12',
    borderColor: '#C89B06',
    borderRadius: 10,
    paddingHorizontal: 12,
    paddingVertical: 6,
    shadowColor: '#000',
    shadowOpacity: 0.55,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
    elevation: 3,
  },
  plusBadge: {
    width: 22,
    height: 22,
    borderRadius: 11,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 3,
  },
  templateAddText: {
    color: '#C89B06',
    fontFamily: 'Poppins_600SemiBold',
    fontSize: 14,
    letterSpacing: 0.2,
  },
});
