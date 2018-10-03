# React! 웹서비스 만들기 기초

## Smart Component (class Component)
- state가 있는 컴포넌트

## Dumb Component (functional Component)
#### stateless functional component
- state가 없는 컴포넌트. state가 필요없다.
- props만 있다.
- 이 컴포넌트는 return을 하기 위해 존재한다.
- componentWillMount등 Lifecycle, state등이 필요없다.

#### class -> function 컴포넌트로 바꿔보자.
- class component
```
class MoviePoster extends Component {
    // 유효성검사
    static propTypes = {
        poster: PropTypes.string.isRequired
    }
    render() {
        // console.log(this.props);
        return (
            <img src={this.props.poster} alt=""/>
        )

    }
}
```
- functional component
```
function MoviePoster({poster}){
    return (
        <img src={poster} alt=""/>
    )
}
// 유효성검사
MoviePoster.propTypes = {
    poster: PropTypes.string.isRequired
}
```
