/* eslint-disable react-native/no-inline-styles */
import {Text, TouchableOpacity} from 'react-native';
import {Reaction} from 'react-native-reactions';
import React, {memo, useState} from 'react';
import {styles} from './style';
import {useDispatch} from 'react-redux';
import {openCardEmoji} from '../../redux/actions/Actions';
import Card from '../Card';

export const CardEmojiList = [
  {
    id: 0,
    emoji: '😇',
    title: 'like',
  },
  {
    id: 1,
    emoji: '🥰',
    title: 'love',
  },
  {
    id: 2,
    emoji: '🤪',
    title: 'care',
  },
  {
    id: 3,
    emoji: '😘',
    title: 'kiss',
  },
  {
    id: 4,
    emoji: '😂',
    title: 'laught',
  },
  {
    id: 5,
    emoji: '😎',
    title: 'cool',
  },
];

interface EmojiItemProp {
  // EmojiItemProp object is indexed with a Key it will return a value of any type.
  [key: string]: any;
  id: number;
  emoji: React.ReactNode | string | number;
  title: string;
}

type tableIndex = {
  title: string;
  completed: string;
  onPress: () => void;
};

const TabelIndex = (props: tableIndex) => {
  const dispetch = useDispatch();
  const [emoji, setEmoji] = useState<EmojiItemProp | undefined>();

  return (
    // <Card index={0} />
    <TouchableOpacity onPress={props.onPress} style={styles.container}>
      <Reaction
        type={'modal'}
        items={CardEmojiList}
        isCardOpen={(e: boolean | undefined) => dispetch(openCardEmoji(!e))}
        onTap={setEmoji}
        cardStyle={{backgroundColor: 'yellow'}}
        iconSize={30}
        titleBoxStyle={{backgroundColor: 'white'}}
        titleStyle={{color: 'black'}}>
        <Text>{props.title}</Text>
      </Reaction>
      {emoji && <Text>{emoji?.emoji}</Text>}
      <Text>{props.completed}</Text>
    </TouchableOpacity>
  );
};

export default memo(TabelIndex);
