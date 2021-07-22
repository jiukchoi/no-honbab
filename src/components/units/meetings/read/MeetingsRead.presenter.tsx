import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { Text, View, Image, TouchableOpacity } from 'react-native'
import { styles } from './MeetingsRead.styles'

const ReadUI = () => {
  const navigation = useNavigation()

  return (
    <View style={styles.mainView}>
      <View style={{width: 1200, marginBottom: 5}}>
        <Text style={{fontSize: 18, fontWeight: 'bold'}}>감자탕 먹을 사람 모여!</Text>
      </View>
      <View style={styles.remarksWrapper}>
        <Text style={{color: '#E24E4A', marginRight: 15, fontSize: 12}}>00일 뒤 모집 마감</Text>
      </View>
      <View>
        <View style={{flexDirection: 'row', marginBottom: 8, alignItems: 'center', justifyContent: 'space-between', width: 320, paddingLeft: 20}}>
          <View style={{flexDirection: 'row', alignItems: 'center', marginBottom: 10}}>
            <Image
              style={{marginRight: 10}}
              source={require('../../../../../public/meetings/time.png')}
            />
            <Text>07.22 17:00 ~ 18:00</Text>
          </View>
        </View>
        <View style={{flexDirection: 'row', marginBottom: 8, alignItems: 'center', justifyContent: 'space-between', width: 320, paddingLeft: 20}}>
          <View style={{flexDirection: 'row', alignItems: 'flex-start', marginBottom: 10}}>
            <Image
              style={{marginRight: 10, marginTop: 3}}
              source={require('../../../../../public/meetings/location.png')} />
            <View>
              <Text style={{marginBottom: 5}}>장소</Text>
              <Text style={{fontSize: 10, color: '#adada3'}}>주소</Text>
            </View>
          </View>
        </View>
          <View>
            <View style={styles.subView}>
              <Image style={styles.tagImg} source={require('../../../../../public/meetings/tag-red.png')} />
              <Text style={styles.title}>
                주최자
              </Text>
              <Text style={styles.text}>
                민성우
              </Text>
            </View>
            <View style={styles.subView}>
              <Image style={styles.tagImg} source={require('../../../../../public/meetings/tag-beige.png')} />
              <Text style={styles.title} >
                모집인원
              </Text>
              <Text style={styles.text}>4명</Text>
            </View>
            <View style={styles.subView}>
              <Image style={styles.tagImg} source={require('../../../../../public/meetings/tag-orange.png')} />
              <Text style={styles.title} >
                참가자
              </Text>
              <Text style={styles.text}>2명</Text>
            </View>
            <View style={styles.subView}>
              <Image style={styles.tagImg} source={require('../../../../../public/meetings/tag-orange.png')} />
              <Text style={styles.title} >
                음식 종류
              </Text>
              <Text style={styles.text}>중식</Text>
            </View>
            <View style={styles.contentsWrapper}>
              <Image style={styles.tagImg} source={require('../../../../../public/meetings/tag-orange.png')} />
              <View style={{paddingRight: 20}}>
                <Text style={[styles.title, {marginBottom: 10, width: '100%'}]}>
                  모집글
                </Text>
                <Text style={styles.text}>누구든 환영입니다.</Text>
              </View>
            </View>
            <TouchableOpacity style={[styles.button, {backgroundColor: '#E24E4A'}]}>
              <Text style={styles.buttonText}>채팅으로 신청하기</Text>
            </TouchableOpacity>
          </View>
      </View>  
    </View>
  )
}

export default ReadUI