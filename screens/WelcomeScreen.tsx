// screens/WelcomeScreen.tsx
import React from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  TouchableOpacity, 
  Image, 
  StatusBar,
  SafeAreaView 
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App';

type WelcomeScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Welcome'>;

type Props = {
  navigation: WelcomeScreenNavigationProp;
};

const WelcomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.content}>
        <Text style={styles.title}>ATTENDANCE APP</Text>
        
        <View style={styles.imageContainer}>
          <Image 
            source={require('../assets/attendance-illustration.png')} 
            style={styles.image} 
            resizeMode="contain"
          />
        </View>
        
        <Text style={styles.subtitle}>
          mark your attendance with ease and security
        </Text>
        
        <View style={styles.buttonContainer}>
          <TouchableOpacity 
            style={styles.studentButton} 
            onPress={() => navigation.navigate('StudentDashboard')}
          >
            <Text style={styles.buttonText}>Student</Text>
          </TouchableOpacity>
          
          <TouchableOpacity 
            style={styles.teacherButton} 
            onPress={() => navigation.navigate('TeacherDashboard')}
          >
            <Text style={styles.buttonText}>Teacher</Text>
          </TouchableOpacity>
        </View>
        
        <View style={styles.signupContainer}>
          <Text style={styles.signupText}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
            <Text style={styles.signupLink}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1E1A3C',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#A9E2FC',
    marginBottom: 20,
  },
  imageContainer: {
    width: '100%',
    height: 200,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '80%',
    height: '100%',
  },
  subtitle: {
    fontSize: 16,
    color: '#B0B0B0',
    textAlign: 'center',
    marginBottom: 40,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 30,
  },
  studentButton: {
    backgroundColor: '#A9D0FC',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    width: '48%',
    alignItems: 'center',
  },
  teacherButton: {
    backgroundColor: '#9B93E8',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    width: '48%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
  },
  signupContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 30,
  },
  signupText: {
    color: '#B0B0B0',
  },
  signupLink: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default WelcomeScreen;