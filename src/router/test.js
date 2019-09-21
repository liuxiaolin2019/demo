import MakeTestPaper from '@/views/test/MakeTestPaper.vue'
import TestPaperManage from '@/views/test/TestPaperManage.vue'
import TestResult from '@/views/test/TestResult.vue'
import testSetter from '@/views/test/testSetter.vue'
import ViewTestPaper from '@/views/test/ViewTestPaper.vue'

export default (
    [
        {
            path: '/MakeTestPaper',
            name: 'MakeTestPaper',
            component: MakeTestPaper
        },{
            path: '/TestPaperManage',
            name: 'TestPaperManage',
            component: TestPaperManage
        },{
            path: '/TestResult',
            name: 'TestResult',
            component: TestResult
        },{
            path: '/testSetter',
            name: 'testSetter',
            component: testSetter
        },{
            path: '/ViewTestPaper',
            name: 'ViewTestPaper',
            component: ViewTestPaper
        }
    ]
)