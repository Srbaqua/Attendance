import React, { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, StatusBar, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

<Ionicons name="home-outline" size={30} color="blue" />


interface ClassItem {
  id: string;
  name: string;
  time: string;
  attendees?: number;
  total?: number;
  upcoming?: boolean;
}

const CLASSES: ClassItem[] = [
  { id: '1', name: 'Mathematics 101', time: '9:00 AM - 10:30 AM', attendees: 25, total: 30 },
  { id: '2', name: 'Advanced Calculus', time: '11:00 AM - 12:30 PM', attendees: 18, total: 20 },
  { id: '3', name: 'Statistics', time: '2:00 PM - 3:30 PM', attendees: 0, total: 25, upcoming: true },
  { id: '4', name: 'Linear Algebra', time: '4:00 PM - 5:30 PM', attendees: 0, total: 15, upcoming: true },
];

const TeacherDashboard: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [activeTab, setActiveTab] = useState<'classes' | 'students' | 'reports'>('classes');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Teacher Dashboard</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
          <Ionicons name="exit-outline" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
      <View style={styles.content}>
        <FlatList
          data={CLASSES}
          renderItem={({ item }) => (
            <View style={styles.classCard}>
              <Text style={styles.className}>{item.name}</Text>
              <Text style={styles.classTime}>{item.time}</Text>
            </View>
          )}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1E1A3C' },
  header: { flexDirection: 'row', justifyContent: 'space-between', padding: 16 },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#FFFFFF' },
  content: { flex: 1, paddingHorizontal: 16 },
  classCard: { backgroundColor: '#2F2A57', padding: 16, marginVertical: 8, borderRadius: 10 },
  className: { fontSize: 16, color: '#FFFFFF' },
  classTime: { fontSize: 14, color: '#B0B0B0' },
});

export default TeacherDashboard;
