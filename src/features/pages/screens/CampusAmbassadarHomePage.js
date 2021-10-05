import {bindActionCreators} from 'redux';
import * as pagesActions from '../redux/action';
import {connect} from 'react-redux';
import Colors from '../../../utilities/Colors';

import React, {Component} from 'react';
import {Image, Text, View, ScrollView, TouchableOpacity} from 'react-native';
import ScreenStyle from './styles/StylesCampusAmbassadorHomePage';

import {LinearTextGradient} from 'react-native-text-gradient';
import {Button} from 'react-native-elements';

import IonIcon from 'react-native-vector-icons/Ionicons';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

class CampusAmbassadorHomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const userId = this.props.auth.user.id;
    this.props.pagesActions
      .checkUserExistence({userId})
      .then(data => {})
      .catch(error => {});

    const userExistsInFirestore = this.props.pages.userExistsInFirestore;
    if (!userExistsInFirestore) {
      // Create new user data
      this.props.pagesActions
        .createNewCA()
        .then(data => {})
        .catch(error => {});
    }
    // Fetching task list
    this.props.pagesActions.fetchTaskList();
  }

  render() {
    const {auth, pages} = this.props;
    const {user} = auth;
    const {email} = user;
    const {taskList} = pages;
    console.log(taskList);

    return (
      <ScrollView style={ScreenStyle.root}>
        {/* Campus Ambassador  text*/}

        <View style={ScreenStyle.CATitleView}>
          <LinearTextGradient
            style={ScreenStyle.textGradientStyle}
            colors={[
              Colors.gradientTextLeft,
              Colors.gradientTextMiddle,
              Colors.gradientTextRight,
            ]}
            locations={[0, 0.5, 1]}>
            <Text style={ScreenStyle.CATitleText}>Campus Ambassador</Text>
          </LinearTextGradient>
        </View>

        {/* Points earned view */}
        <View style={ScreenStyle.pointsMainView}>
          <View style={ScreenStyle.pointsBorderBox}>
            <View style={ScreenStyle.pointsEarned}>
              <Text style={ScreenStyle.white10}>Points Earned</Text>

              <Text style={ScreenStyle.white10}>450 Pts.</Text>
            </View>

            <View style={ScreenStyle.pinnedPoints}>
              <Text style={ScreenStyle.white10}>Pinned Points</Text>

              <Text style={ScreenStyle.white10}>1250 Pts.</Text>
            </View>

            <View style={ScreenStyle.availablePoints}>
              <Text style={ScreenStyle.white10}>Available Points</Text>

              <Text style={ScreenStyle.white10}>2500 Pts.</Text>
            </View>
          </View>
        </View>

        {/* TASKS  */}

        <View style={ScreenStyle.MainTasksView}>
          <View style={ScreenStyle.tasksTitleRow}>
            <Text style={ScreenStyle.tasksTitleStyle}>Tasks</Text>

            <View style={ScreenStyle.rowFlex}>
              <Button
                title="Finished Tasks"
                titleStyle={ScreenStyle.buttonTitleStyle}
                type="outline"
                buttonStyle={ScreenStyle.finishedTasksButton}
              />
              <Button
                title="Pinned Tasks"
                titleStyle={ScreenStyle.buttonTitleStyle}
                type="outline"
                buttonStyle={ScreenStyle.pinnedTasksButton}
              />
            </View>
          </View>

          <TouchableOpacity>
            <View style={ScreenStyle.appDownloadPart}>
              <View style={ScreenStyle.appDownloadsFirstColumn}>
                <Text style={ScreenStyle.white15}>App Download Pt. 1</Text>

                <Text style={ScreenStyle.white8}>
                  Your task is to get students from your campus download the
                  Blithchron '22 App.
                </Text>

                <View style={ScreenStyle.startEndDateStyle}>
                  <View>
                    <Text style={ScreenStyle.white8}>Start Date: 12/10/21</Text>

                    <Text style={ScreenStyle.white8}>End Date: 20/10/21</Text>
                  </View>

                  <AntDesignIcon
                    name="pushpin"
                    style={ScreenStyle.pinIconStyle}
                    size={20}
                  />
                </View>
              </View>

              <View style={ScreenStyle.pointsBox}>
                <View style={ScreenStyle.pointsBoxSquare}>
                  <View style={ScreenStyle.pointsBoxRow}>
                    <View style={ScreenStyle.pointsBoxTopLeft}>
                      <Text style={ScreenStyle.white8}>20 Pts</Text>

                      <Text style={ScreenStyle.white6Center}>
                        200+ Downloads
                      </Text>
                    </View>

                    <View style={ScreenStyle.pointsBoxTopRight}>
                      <Text style={ScreenStyle.white8}>15 Pts</Text>

                      <Text style={ScreenStyle.white6Center}>
                        100+ Downloads
                      </Text>
                    </View>
                  </View>

                  <View style={ScreenStyle.pointsBoxRow}>
                    <View style={ScreenStyle.pointsBoxBottomLeft}>
                      <Text style={ScreenStyle.white8}>10 Pts</Text>

                      <Text style={ScreenStyle.white6Center}>
                        10+ Downloads
                      </Text>
                    </View>
                    <View style={ScreenStyle.pointsBoxBottomRight}>
                      <Text style={ScreenStyle.white8}>5 Pts</Text>

                      <Text style={ScreenStyle.white6Center}>
                        20+ Downloads
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={ScreenStyle.playButtonColumn}>
                <IonIcon
                  name="play"
                  style={ScreenStyle.selfAlignCenter}
                  size={30}
                  color="white"
                />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={ScreenStyle.appDownloadPart}>
              <View style={[ScreenStyle.appDownloadsFirstColumn]}>
                <Text style={ScreenStyle.white15}>App Download Pt. 1</Text>

                <Text style={ScreenStyle.white8}>
                  Your task is to get students from your campus download the
                  Blithchron '22 App.
                </Text>

                <View style={ScreenStyle.startEndDateStyle}>
                  <View>
                    <Text style={ScreenStyle.white8}>Start Date: 12/10/21</Text>

                    <Text style={ScreenStyle.white8}>End Date: 20/10/21</Text>
                  </View>

                  <AntDesignIcon
                    name="pushpin"
                    style={ScreenStyle.pinIconStyle}
                    size={20}
                  />
                </View>
              </View>

              <View style={ScreenStyle.pointsBox}>
                <View style={ScreenStyle.pointsBoxSquare}>
                  <View style={ScreenStyle.pointsBoxRow}>
                    <View style={ScreenStyle.pointsBoxTopLeft}>
                      <Text style={ScreenStyle.white8}>20 Pts</Text>

                      <Text style={ScreenStyle.white6Center}>
                        200+ Downloads
                      </Text>
                    </View>

                    <View style={ScreenStyle.pointsBoxTopRight}>
                      <Text style={ScreenStyle.white8}>15 Pts</Text>

                      <Text style={ScreenStyle.white6Center}>
                        100+ Downloads
                      </Text>
                    </View>
                  </View>

                  <View style={ScreenStyle.pointsBoxRow}>
                    <View style={ScreenStyle.pointsBoxBottomLeft}>
                      <Text style={ScreenStyle.white8}>10 Pts</Text>

                      <Text style={ScreenStyle.white6Center}>
                        10+ Downloads
                      </Text>
                    </View>
                    <View style={ScreenStyle.pointsBoxBottomRight}>
                      <Text style={ScreenStyle.white8}>5 Pts</Text>

                      <Text style={ScreenStyle.white6Center}>
                        20+ Downloads
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={ScreenStyle.playButtonColumn}>
                <IonIcon
                  name="play"
                  style={ScreenStyle.selfAlignCenter}
                  size={30}
                  color="white"
                />
              </View>
            </View>
          </TouchableOpacity>

          <TouchableOpacity>
            <View style={ScreenStyle.appDownloadPart}>
              <View style={[ScreenStyle.appDownloadsFirstColumn]}>
                <Text style={ScreenStyle.white15}>App Download Pt. 1</Text>

                <Text style={ScreenStyle.white8}>
                  Your task is to get students from your campus download the
                  Blithchron '22 App.
                </Text>

                <View style={ScreenStyle.startEndDateStyle}>
                  <View>
                    <Text style={ScreenStyle.white8}>Start Date: 12/10/21</Text>

                    <Text style={ScreenStyle.white8}>End Date: 20/10/21</Text>
                  </View>

                  <AntDesignIcon
                    name="pushpin"
                    style={ScreenStyle.pinIconStyle}
                    size={20}
                  />
                </View>
              </View>

              <View style={ScreenStyle.pointsBox}>
                <View style={ScreenStyle.pointsBoxSquare}>
                  <View style={ScreenStyle.pointsBoxRow}>
                    <View style={ScreenStyle.pointsBoxTopLeft}>
                      <Text style={ScreenStyle.white8}>20 Pts</Text>

                      <Text style={ScreenStyle.white6Center}>
                        200+ Downloads
                      </Text>
                    </View>

                    <View style={ScreenStyle.pointsBoxTopRight}>
                      <Text style={ScreenStyle.white8}>15 Pts</Text>

                      <Text style={ScreenStyle.white6Center}>
                        100+ Downloads
                      </Text>
                    </View>
                  </View>

                  <View style={ScreenStyle.pointsBoxRow}>
                    <View style={ScreenStyle.pointsBoxBottomLeft}>
                      <Text style={ScreenStyle.white8}>10 Pts</Text>

                      <Text style={ScreenStyle.white6Center}>
                        10+ Downloads
                      </Text>
                    </View>
                    <View style={ScreenStyle.pointsBoxBottomRight}>
                      <Text style={ScreenStyle.white8}>5 Pts</Text>

                      <Text style={ScreenStyle.white6Center}>
                        20+ Downloads
                      </Text>
                    </View>
                  </View>
                </View>
              </View>
              <View style={ScreenStyle.playButtonColumn}>
                <IonIcon
                  name="play"
                  style={ScreenStyle.selfAlignCenter}
                  size={30}
                  color="white"
                />
              </View>
            </View>
          </TouchableOpacity>
          <Button
            title="See more"
            titleStyle={{color: Colors.buttonBlue}}
            type="clear"
            buttonStyle={{
              width: '30%',
              alignSelf: 'center',
              marginTop: 10,
              height: 40,
            }}
          />
        </View>

        {/* LEADERBOARD STARTS  */}

        <View style={ScreenStyle.MainTasksView}>
          <View style={ScreenStyle.tasksTitleRow}>
            <Text style={ScreenStyle.tasksTitleStyle}>Leaderboard</Text>
          </View>
          <View style={ScreenStyle.leaderboardCard}>
            <View style={ScreenStyle.profilePicLeaderboard}>
              <Image
                source={require('../../../assets/grey_circle.png')}
                style={ScreenStyle.sixtyBySixty}
              />
            </View>
            <View style={ScreenStyle.nameAndCollege}>
              <Text style={ScreenStyle.white20}>John Doe</Text>
              <Text style={ScreenStyle.white15}>IIT Gandhinagar</Text>
            </View>
            <View style={ScreenStyle.pointsAndRank}>
              <Text style={ScreenStyle.white25}>1st</Text>
              <Text style={ScreenStyle.white18}>119 Pts</Text>
            </View>
          </View>

          <View style={ScreenStyle.leaderboardCard}>
            <View style={ScreenStyle.profilePicLeaderboard}>
              <Image
                source={require('../../../assets/grey_circle.png')}
                style={ScreenStyle.sixtyBySixty}
              />
            </View>
            <View style={ScreenStyle.nameAndCollege}>
              <Text style={ScreenStyle.white20}>John Doe</Text>
              <Text style={ScreenStyle.white15}>IIT Gandhinagar</Text>
            </View>
            <View style={ScreenStyle.pointsAndRank}>
              <Text style={ScreenStyle.white25}>1st</Text>
              <Text style={ScreenStyle.white18}>119 Pts</Text>
            </View>
          </View>

          <View style={ScreenStyle.leaderboardCard}>
            <View style={ScreenStyle.profilePicLeaderboard}>
              <Image
                source={require('../../../assets/grey_circle.png')}
                style={ScreenStyle.sixtyBySixty}
              />
            </View>
            <View style={ScreenStyle.nameAndCollege}>
              <Text style={ScreenStyle.white20}>John Doe</Text>
              <Text style={ScreenStyle.white15}>IIT Gandhinagar</Text>
            </View>
            <View style={ScreenStyle.pointsAndRank}>
              <Text style={ScreenStyle.white25}>1st</Text>
              <Text style={ScreenStyle.white18}>119 Pts</Text>
            </View>
          </View>

          <Button
            title="See more"
            titleStyle={{color: Colors.buttonBlue}}
            type="clear"
            buttonStyle={{
              width: '30%',
              alignSelf: 'center',
              marginTop: 20,
              height: 40,
            }}
          />
        </View>
      </ScrollView>
    );
  }
}

const mapStateToProps = state => {
  return {
    pages: state.pages,
    auth: state.auth,
  };
};

function mapDispatchToProps(dispatch) {
  return {
    pagesActions: bindActionCreators({...pagesActions}, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CampusAmbassadorHomePage);
