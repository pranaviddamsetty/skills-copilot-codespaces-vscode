function skillsMember() {
    return {
        restrict: 'E',
        templateUrl: 'modules/skills/views/member.html',
        controller: 'SkillsMemberControl',
        controllerAs: 'vm',
        bindToController: true,
        scope: {
            member: '**'
        }
    };
}