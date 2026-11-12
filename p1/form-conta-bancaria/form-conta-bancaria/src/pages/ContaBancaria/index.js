import { KeyboardAvoidingView } from 'react-native';
import AberturaConta from '../../components/AberturaConta/index';

export default function ContaBancaria() {
  return (
    <KeyboardAvoidingView style={{ flex: 1 }}>
      <AberturaConta />
    </KeyboardAvoidingView>
  );
}
