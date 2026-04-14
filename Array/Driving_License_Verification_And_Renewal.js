function processLicenseData(N, C, people, newLicenses, renewals) {
    // User should implement the logic here
    for(let person of people){
        let id=person[0];
        let age=person[1];
        let experience=person[2];
        let issue_year=person[3];
        if(age>=18 && experience>=1 && issue_year===0){
            newLicenses.push(id);
        }
        if(issue_year!==0 && C-issue_year>5){
            renewals.push(id);
        }
    }
}

function main() {
    const input = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
    const [N, C] = input[0].split(' ').map(Number);
    const people = input.slice(1, N + 1).map(line => line.split(' ').map(Number));

    const newLicenses = [];
    const renewals = [];

    processLicenseData(N, C, people, newLicenses, renewals);

    if (newLicenses.length === 0) {
        console.log('-1');
    } else {
        console.log(newLicenses.sort((a, b) => a - b).join(' '));
    }

    if (renewals.length === 0) {
        console.log('-1');
    } else {
        console.log(renewals.sort((a, b) => a - b).join(' '));
    }
}

main();
