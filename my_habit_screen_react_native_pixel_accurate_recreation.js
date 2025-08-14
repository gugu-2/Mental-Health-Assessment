// MyHabitScreen.js
// Pixel-faithful recreation of the provided Figma screen, responsive across common iPhone sizes.
// Dependencies: react-native-linear-gradient, react-native-svg
//   npm i react-native-linear-gradient react-native-svg
// If you use Expo: expo install react-native-svg expo-linear-gradient
// Fonts used in Figma: "Audiowide" and a rounded sans. Replace with your own if needed.
// Updated: fixed styles object closing brace and added a tiny comment to force a new file version.

import React from 'react';
import { SafeAreaView, View, Text, StyleSheet, Dimensions, Platform, StatusBar, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Svg, { Path, Circle, Rect } from 'react-native-svg';

const { width: W } = Dimensions.get('window');
const BASE = 375; // Figma width
const s = (n) => (W / BASE) * n; // scale helper

export default function MyHabitScreen() {
  return (
    <SafeAreaView style={styles.screen}>
      <StatusBar barStyle="light-content" />

      {/* Top card */}
      <View style={styles.topWrap}>
        <View style={styles.topHeader}>
          <TouchableOpacity style={styles.iconBtn} activeOpacity={0.7}>
            <Svg width={s(24)} height={s(24)} viewBox="0 0 24 24">
              <Path d="M15 18l-6-6 6-6" stroke="#0F2A66" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"/>
            </Svg>
          </TouchableOpacity>
          <Text style={styles.title}>My Habit</Text>
          <View style={styles.rightIcons}>
            <Svg width={s(18)} height={s(18)} viewBox="0 0 24 24">
              <Circle cx="5" cy="12" r="2" fill="#0F2A66"/>
              <Circle cx="12" cy="12" r="2" fill="#0F2A66"/>
              <Circle cx="19" cy="12" r="2" fill="#0F2A66"/>
            </Svg>
          </View>
        </View>

        {/* Illustration (replace with your exported SVG/png for perfect match) */}
        <View style={styles.illustrationWrap}>
          {/* Placeholder illustration: replace below inline SVG with your asset */}
          <Svg width="100%" height="100%" viewBox="0 0 300 160">
            <Rect x="0" y="20" width="300" height="120" rx="48" fill="#DDEBFF"/>
            <Path d="M70 125c40-40 60-40 100 0" stroke="#9DBAF5" strokeWidth="10" strokeLinecap="round" fill="none"/>
            <Circle cx="120" cy="85" r="32" fill="#BFD3FF"/>
            <Path d="M170 86 h40" stroke="#9DBAF5" strokeWidth="10" strokeLinecap="round"/>
          </Svg>
        </View>

        {/* Badge */}
        <View style={styles.badge}>
          <Svg width={8} height={8}><Circle cx={4} cy={4} r={4} fill="#FFB61B"/></Svg>
          <Text style={styles.badgeText}>Beginner</Text>
        </View>

        {/* Heading + sub */}
        <Text style={styles.cardHeading}>Full Body Stretching</Text>
        <Text style={styles.cardSub}>Warm Up before heavy workout</Text>

        {/* Play button */}
        <TouchableOpacity activeOpacity={0.8} style={styles.playBtn}>
          <LinearGradient colors={["#3BA1FF", "#0F67FE"]} start={{x:0,y:0}} end={{x:1,y:1}} style={styles.playGrad}>
            <Svg width={s(22)} height={s(22)} viewBox="0 0 24 24">
              <Path d="M8 5l11 7-11 7V5z" fill="#E6F1FF"/>
            </Svg>
          </LinearGradient>
        </TouchableOpacity>
      </View>

      {/* Dark area */}
      <View style={styles.darkArea}>
        {/* Health Metrics header */}
        <View style={styles.metricsHeader}>
          <Text style={styles.metricsTitle}>Health Metrics</Text>
          <Svg width={s(18)} height={s(18)} viewBox="0 0 24 24">
            <Circle cx="5" cy="12" r="2" fill="#A9B6D6"/>
            <Circle cx="12" cy="12" r="2" fill="#A9B6D6"/>
            <Circle cx="19" cy="12" r="2" fill="#A9B6D6"/>
          </Svg>
        </View>

        {/* Cards row */}
        <View style={styles.cardsRow}>
          <MetricCard
            bg="#0F67FE"
            number="700"
            unit="Cal"
            label="Calories Burned"
            barColor="#A6CBFF"
          />

          <MetricCard
            bg="#FA4D5E"
            number="13th"
            unit="Day"
            label="Practice Days"
            icon="calendar"
            barColor="#FFD7DD"
          />

          <MetricCard
            bg="#3DD6DB"
            number="92"
            unit="mmHg"
            label="Blood Pressure"
            icon="edit"
            barColor="#D9FBFB"
          />
        </View>

        {/* Challenge row */}
        <View style={styles.challengeRow}>
          <Svg width={s(18)} height={s(18)} viewBox="0 0 24 24" style={{marginRight: s(8)}}>
            <Path d="M3 12h6l3-7 3 14 3-7h3" stroke="#7DE0FF" strokeWidth={2} fill="none" strokeLinecap="round"/>
          </Svg>
          <Text style={styles.challengeText}>Triple Stretch Challenge</Text>
          <Text style={styles.challengeBadge}>3x</Text>
        </View>

        {/* Level bar */}
        <View style={styles.levelCard}>
          <LinearGradient colors={["#00FD8B", "#F8FF22"]} start={{x:0,y:0}} end={{x:1,y:0}} style={styles.levelPill}>
            <Text style={styles.levelText}>Level 3</Text>
          </LinearGradient>
          <View style={styles.levelRail} />
          <View style={styles.levelKnob}>
            <Svg width={s(18)} height={s(18)} viewBox="0 0 24 24">
              <Path d="M13 2v8h8" stroke="#001F56" strokeWidth={2.2} fill="none" strokeLinecap="round"/>
              <Circle cx="12" cy="12" r="9" stroke="#001F56" strokeWidth={2} fill="none"/>
            </Svg>
          </View>
        </View>

        {/* Home indicator */}
        <View style={styles.homeIndicator} />
      </View>
    </SafeAreaView>
  );
}

function MetricCard({ bg, number, unit, label, icon, barColor }) {
  return (
    <View style={[styles.metricCard, { backgroundColor: bg }] }>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
        <View>
          <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
            <Text style={styles.metricNumber}>{number}</Text>
            <Text style={[styles.metricUnit, { color: barColor }]}>{' '}{unit}</Text>
          </View>
          <Text style={styles.metricLabel}>{label}</Text>
        </View>
        {icon === 'calendar' && (
          <Svg width={s(18)} height={s(18)} viewBox="0 0 24 24">
            <Path d="M7 3v4M17 3v4" stroke="#FFD7DD" strokeWidth={2} strokeLinecap="round"/>
            <Rect x="3" y="7" width="18" height="14" rx="3" stroke="#FFD7DD" strokeWidth={2} fill="none"/>
          </Svg>
        )}
        {icon === 'edit' && (
          <Svg width={s(18)} height={s(18)} viewBox="0 0 24 24">
            <Path d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25z" fill="#D9FBFB"/>
          </Svg>
        )}
      </View>

      {/* mini chart */}
      <View style={styles.chartArea}>
        {[12, 6, 20, 15, 8, 18, 10].map((h, i) => (
          <View key={i} style={[styles.bar, { height: s(h * 2), backgroundColor: barColor }]} />
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { flex: 1, backgroundColor: '#001F56' },

  topWrap: {
    backgroundColor: '#EEF8FE',
    marginHorizontal: s(16),
    marginTop: Platform.OS === 'android' ? s(12) : s(4),
    borderBottomLeftRadius: s(24),
    borderBottomRightRadius: s(24),
    paddingBottom: s(18),
    overflow: 'hidden'
  },
  topHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: s(8),
    paddingTop: s(8),
  },
  iconBtn: { padding: s(8) },
  title: {
    color: '#0F2A66',
    fontSize: s(16),
    fontWeight: '700',
  },
  rightIcons: { padding: s(8) },

  illustrationWrap: {
    height: s(160),
    marginHorizontal: s(16),
    marginTop: s(8)
  },

  badge: {
    alignSelf: 'flex-start',
    marginLeft: s(24),
    marginTop: s(8),
    borderRadius: s(16),
    borderWidth: 1,
    borderColor: '#ED8B01',
    backgroundColor: '#F0F1EC',
    paddingHorizontal: s(12),
    paddingVertical: s(6),
    flexDirection: 'row',
    alignItems: 'center',
    gap: s(8)
  },
  badgeText: {
    color: '#ED8B01',
    fontSize: s(14),
    fontWeight: '700'
  },

  cardHeading: {
    marginTop: s(8),
    marginLeft: s(24),
    marginRight: s(90),
    fontSize: s(24),
    lineHeight: s(32),
    color: '#0F67FE',
    fontWeight: '800'
  },
  cardSub: {
    marginTop: s(2),
    marginLeft: s(24),
    marginRight: s(90),
    fontSize: s(14),
    color: '#3D4966',
    opacity: 0.95,
    letterSpacing: -0.1,
    fontWeight: '600'
  },
  playBtn: {
    position: 'absolute',
    right: s(20),
    bottom: s(20),
    width: s(48),
    height: s(48),
    borderRadius: s(24),
    shadowColor: '#0F67FE',
    shadowOpacity: Platform.OS === 'ios' ? 0.35 : 0.6,
    shadowRadius: s(10),
    shadowOffset: { width: 0, height: s(6) },
    elevation: 8,
  },
  playGrad: {
    flex: 1,
    borderRadius: s(24),
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#A6CBFF'
  },

  darkArea: {
    flex: 1,
    backgroundColor: '#001F56',
    paddingTop: s(14),
  },
  metricsHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: s(24),
    marginBottom: s(10)
  },
  metricsTitle: {
    color: '#FFFFFF',
    fontSize: s(18),
    fontWeight: '800',
    letterSpacing: -0.2
  },

  cardsRow: {
    flexDirection: 'row',
    paddingHorizontal: s(16),
    gap: s(10),
  },
  metricCard: {
    flex: 1,
    height: s(153),
    borderRadius: s(12),
    padding: s(12),
  },
  metricNumber: {
    color: '#FFFFFF',
    fontSize: s(28),
    lineHeight: s(33),
    letterSpacing: -1,
    fontWeight: '800'
  },
  metricUnit: {
    fontSize: s(10),
    letterSpacing: -0.1,
    marginBottom: s(4),
    fontWeight: '700'
  },
  metricLabel: {
    color: '#FFFFFF',
    fontSize: s(12),
    letterSpacing: -0.1,
    fontWeight: '700',
    marginTop: s(2)
  },
  chartArea: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: s(7),
    marginTop: s(8),
    paddingRight: s(36)
  },
  bar: {
    width: s(3),
    borderRadius: s(3)
  },

  challengeRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: s(16),
    paddingHorizontal: s(24),
  },
  challengeText: {
    color: '#E9F0FF',
    fontSize: s(16),
    fontWeight: '700',
    flex: 1
  },
  challengeBadge: {
    color: '#D1FF33',
    fontSize: s(16),
    fontWeight: '800'
  },

  levelCard: {
    backgroundColor: '#000D25',
    borderRadius: s(12),
    marginHorizontal: s(16),
    marginTop: s(8),
    height: s(60),
    justifyContent: 'center'
  },
  levelPill: {
    position: 'absolute',
    left: s(6),
    height: s(48),
    borderRadius: s(12),
    paddingHorizontal: s(25),
    alignItems: 'center',
    justifyContent: 'center'
  },
  levelText: {
    fontSize: s(20),
    lineHeight: s(24),
    fontWeight: '800',
    color: '#162041',
    letterSpacing: -0.4
  },
  levelRail: {
    position: 'absolute',
    right: s(8),
    width: s(8),
    height: s(28),
    backgroundColor: '#0F67FE',
    borderRadius: s(2)
  },
  levelKnob: {
    position: 'absolute',
    right: s(50),
    width: s(32),
    height: s(32),
    borderRadius: s(16),
    backgroundColor: '#D1FF33',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOpacity: 0.15,
    shadowRadius: s(8),
    shadowOffset: { width: 0, height: s(2) },
    elevation: 4
  },

  homeIndicator: {
    alignSelf: 'center',
    marginTop: s(18),
    width: s(134),
    height: s(5),
    borderRadius: 100,
    backgroundColor: '#0F67FE'
  },
});

/* End of file — styles object properly closed. */
