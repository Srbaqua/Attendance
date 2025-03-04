// screens/SignupScreen.tsx
import React, { useState } from 'react';
import { 
  StyleSheet, 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Image
} from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../App';

type SignupScreenNavigationProp = StackNavigationProp<RootStackParamList, 'Signup'>;

type Props = {
  navigation: SignupScreenNavigationProp;
};

const SignupScreen: React.FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState<string>('');

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />
      <View style={styles.content}>
        <Text style={styles.title}>ATTENDANCE APP</Text>
        
        <View style={styles.formContainer}>
          <Text style={styles.formTitle}>SIGNUP</Text>
          
          <TextInput
            style={styles.input}
            placeholder="addyouremail@gmail.com"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
          
          <TouchableOpacity 
            style={styles.continueButton}
            onPress={() => {
              // Handle signup logic
              alert('Signup functionality would be implemented here');
            }}
          >
            <Text style={styles.continueButtonText}>Continue</Text>
          </TouchableOpacity>
          
          <Text style={styles.orText}>or</Text>
          
          <TouchableOpacity style={styles.googleButton}>
            <View style={styles.socialButtonContent}>
              <Image 
                source={require('../assets/google-icon.png')} 
                style={styles.socialIcon} 
              />
              <Text style={styles.googleButtonText}>Continue with Google</Text>
            </View>
          </TouchableOpacity>
          
          <TouchableOpacity style={styles.appleButton}>
            <View style={styles.socialButtonContent}>
              <Image 
                source={require('../assets/apple-icon.png')} 
                style={styles.socialIcon} 
              />
              <Text style={styles.appleButtonText}>Continue with Apple</Text>
            </View>
          </TouchableOpacity>
          
          <Text style={styles.termsText}>
            By clicking continue, you agree to our{' '}
            <Text style={styles.termsLink}>Terms of Service</Text> and{' '}
            <Text style={styles.termsLink}>Privacy Policy</Text>
          </Text>
        </View>
        
        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
            <Text style={styles.loginLink}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EBF0FF',
  },
  content: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4A4A8F',
    marginBottom: 40,
  },
  formContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 24,
    width: '100%',
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  formTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#4A4A8F',
    marginBottom: 24,
  },
  input: {
    width: '100%',
    height: 50,
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 8,
    paddingHorizontal: 16,
    marginBottom: 16,
    backgroundColor: '#FFFFFF',
  },
  continueButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#4A4A8F',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  continueButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  orText: {
    fontSize: 14,
    color: '#9B9B9B',
    marginVertical: 8,
  },
  googleButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  appleButton: {
    width: '100%',
    height: 50,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  socialButtonContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  socialIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  googleButtonText: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '500',
  },
  appleButtonText: {
    color: '#000000',
    fontSize: 14,
    fontWeight: '500',
  },
  termsText: {
    fontSize: 12,
    color: '#9B9B9B',
    textAlign: 'center',
    marginTop: 8,
  },
  termsLink: {
    color: '#4A4A8F',
    fontWeight: '500',
  },
  loginContainer: {
    flexDirection: 'row',
    position: 'absolute',
    bottom: 30,
  },
  loginText: {
    color: '#4A4A8F',
  },
  loginLink: {
    color: '#4A4A8F',
    fontWeight: 'bold',
  },
});

export default SignupScreen;