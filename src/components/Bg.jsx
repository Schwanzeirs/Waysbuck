import cssModules from '../assets/css/Global.module.css'
import groupa from '../assets/img/Groupa.png'
import groupb from '../assets/img/Groupb.png'
import groupc from '../assets/img/Groupc.png'
import groupd from '../assets/img/Groupd.png'

const styles = {
    group: {
        position: 'Absolute',
        top: '-159.3px',
        left: '-83.91px'
    },

    bored: {
        position: 'Absolute',
        top: '329.31px',
        left: '391.16px'
    },

    shana: {
        position: 'Absolute',
        top: '-131.3px',
        left: '573.1px'
    },

    shaku: {
        position: 'Absolute',
        top: '175.42px',
        left: '779.1px'
    },

    groupa: {
        position: 'Absolute',
        bottom: '13px',
        right: '113.6px'
    },

    groupc: {
        position: 'Absolute',
        bottom: '21px',
        left: '0px'
    },

    groupd: {
        position: 'Absolute',
        bottom: '68px',
        left: '12px'
    },
}

function Bg() {
    return (
        <div>
            <div style={styles.group} className={cssModules.group}>
                <img style={styles.groupa} src={groupa} alt="" />
            </div>
            <div style={styles.bored} className={cssModules.bored}>
                <img src={groupb} alt="" />
            </div>
            <div style={styles.shana} className={cssModules.shana}>
                <img style={styles.groupc} src={groupc} alt="" />
            </div>
            <div style={styles.shaku} className={cssModules.shaku}>
                <img style={styles.groupd} src={groupd} alt="" />
            </div>
        </div>
    )
}

export default Bg;