import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, SafeAreaView, StatusBar, FlatList } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

<Ionicons name="home-outline" size={30} color="blue" />


interface ClassItem {
  id: string;
  name: string;
  time: string;
  present?: boolean;
  upcoming?: boolean;
}

const CLASSES: ClassItem[] = [
  { id: '1', name: 'Mathematics', time: '9:00 AM - 10:30 AM', present: true },
  { id: '2', name: 'Physics', time: '11:00 AM - 12:30 PM', present: true },
  { id: '3', name: 'Computer Science', time: '2:00 PM - 3:30 PM', present: false },
  { id: '4', name: 'English', time: '4:00 PM - 5:30 PM', upcoming: true },
];

const StudentDashboard: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Student Dashboard</Text>
        <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
          <Ionicons name="exit-outline" size={24} color="#fff" />
        </TouchableOpacity>
      </View>
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
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#1E1A3C' },
  header: { flexDirection: 'row', justifyContent: 'space-between', padding: 16 },
  headerTitle: { fontSize: 20, fontWeight: 'bold', color: '#FFFFFF' },
  classCard: { backgroundColor: '#2F2A57', padding: 16, marginVertical: 8, borderRadius: 10 },
  className: { fontSize: 16, color: '#FFFFFF' },
  classTime: { fontSize: 14, color: '#B0B0B0' },
});

export default StudentDashboard;
