import { Controller, Post, Get, Patch, Delete, Param, Body } from '@nestjs/common';
import { IssuesService } from './issues.service';
import { UserContext } from '../common/decorators/user-context.decorator';

@Controller('issues')
export class IssuesController {
  constructor(private issuesService: IssuesService) {}

  @Post()
  create(@Body() body, @UserContext() user) {
    return this.issuesService.create(body, user);
  }

  @Get()
  findAll(@UserContext() user) {
    return this.issuesService.findAll(user);
  }

  @Get(':id')
  findOne(@Param('id') id, @UserContext() user) {
    return this.issuesService.findOne(id, user);
  }

  @Patch(':id')
  update(@Param('id') id, @Body() body, @UserContext() user) {
    return this.issuesService.updateIssue(id, body, user);
  }

  @Delete(':id')
  remove(@Param('id') id, @UserContext() user) {
    return this.issuesService.delete(id, user);
  }
}
