var createIssue = require('github-create-issue');

var options = {
    'token': 'cac13aa6d8b422c2881113d4339542c04eeb78ed',
    'body': 'THIS IS A TEST ISSUE. PLEASE CLOSE.',
};

var currentTime = new Date()

var issueName = `Test Issue ${currentTime}`

createIssue( 'SociallyCompute/issuebot', issueName, options, clbk );
 
function clbk( error, issue, info ) {
    // Check for rate limit information...
    if ( info ) {
        console.error( 'Limit: %d', info.limit );
        console.error( 'Remaining: %d', info.remaining );
        console.error( 'Reset: %s', (new Date( info.reset*1000 )).toISOString() );
    }
    if ( error ) {
        throw new Error( error.message );
    }
    console.log( JSON.stringify( issue ) );
    // returns <issue_data>
}
