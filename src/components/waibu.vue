<template>
<div class="sjkl">
    <el-table :data="web17" style="width: 100%">
        <el-table-column align="center" label="序号" width="140" prop="id">
        </el-table-column>
        <el-table-column align="center" prop="courseName" label="用户名" width="120">
        </el-table-column>
        <el-table-column align="center" prop="courseDesc" label="用户角色" width="120">
        </el-table-column>
        <el-table-column align="center" prop="professional.id" label="用户姓名" width="120">
        </el-table-column>
        <el-table-column align="center" prop="professional.professionalName" label="联系电话" width="140">
        </el-table-column>
        <el-table-column align="center" prop="professional.professionalDesc" label="用户备注" width="140">
        </el-table-column>
        <el-table-column label="操作" width="250">
            <template slot-scope="scope">
                <el-button size="mini" @click="handleEdit(scope.row)">编辑</el-button>
                <el-button @click="handleDelete(scope.$index, scope.row)" type="text" size="small">删除</el-button>
            </template>
        </el-table-column>
    </el-table>

    <div class="tian2" @click="dialogFormVisible = true">
        <i class="el-icon-plus"></i><span>新增</span>
    </div>

    <el-dialog title="新增" :visible.sync="dialogFormVisible">
        <el-form :model="form">
            <el-form-item label="professionalId" :label-width="formLabelWidth">
                <el-input v-model="form.professionalId" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="courseDesc" :label-width="formLabelWidth">
                <el-input v-model="form.courseDesc" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="courseName" :label-width="formLabelWidth">
                <el-input v-model="form.courseName" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="id" :label-width="formLabelWidth">
                <el-input v-model="form.id" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="professionlName" :label-width="formLabelWidth">
                <el-input v-model="form.professionalName" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="professionlDesc" :label-width="formLabelWidth">
                <el-input v-model="form.professionalDesc" autocomplete="off"></el-input>
            </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="sumbitAddRow()">确 定</el-button>
        </div>
    </el-dialog>

    <el-dialog title="编辑" :visible.sync="editFormVisible">
        <el-form :model="addForm" ref="editForm">
            <el-form-item label="用户名" :label-width="formLabelWidth">
                <el-input v-model="addForm.courseDesc" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="用户角色" :label-width="formLabelWidth">
                <el-input v-model="addForm.courseName" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="用户姓名" :label-width="formLabelWidth">
                <el-input v-model="addForm.id" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="联系电话" :label-width="formLabelWidth">
                <el-input v-model="addForm.professional.professionalDesc" autocomplete="off"></el-input>
            </el-form-item>
            <el-form-item label="用户备注" :label-width="formLabelWidth">
                <el-input v-model="addForm.professional.professionalName" autocomplete="off"></el-input>
            </el-form-item>
        </el-form>
        <div>
            <el-button @click="cancel()">取消</el-button>
            <el-button type="primary" v-on:click="sumbitEditRow()" :loading="addLoading">确定</el-button>
        </div>

    </el-dialog>
</div>
</template>

<style scoped>
.sjkl {
    float: left;
    margin-left: 23%;
    margin-top: 8%;
    cursor: pointer;
}
</style>

<script>
export default {
    data() {
        return {
            indexRow: 0,
            formLabelWidth: '120px',
            addLoading: false,
            web17: [],
            web: [],
            editForm: [],
            dialogFormVisible: false,
            editFormVisible: false, //是否显示编辑窗口
            form: {
                professionalId: '',
                courseDesc: '',
                courseName: '',
                id: '',
                professionalName: '',
                professionalDesc: ''
            },
            addForm: {
                courseDesc: '',
                courseName: '',
                id: '',
                professional: {
                    id: '',
                    professionalDesc: '',
                    professionalName: ''
                },
            },
        }
    },
    methods: {
        cha() {
            let than = this
            than.$axios.get("http://139.9.169.87:8081/examsystem/getAllCourse")
                .then(res => {
                    than.web17 = res.data.data
                    console.log(than.web17)
                    // console.log(than.web17.length)

                })
                .catch(err => {
                    console.log(err)
                })
        },

        sumbitAddRow() {
            this.$axios.post(
                "http://139.9.169.87:8081/examsystem/addCourse?professionalId=" + 161 + "&courseDesc=" + this.form.courseDesc + "&courseName=" + this.form.courseName + "&professional.id=" + 161 + "&professional.professionalName=" + this.form.professionalName + "&professional.professionalDesc=" + this.form.professionalDesc, {
                    // params: {
                    //     professionalId: 130,
                    //     courseDesc: this.form.courseDesc,
                    //     courseName: this.form.courseName,
                    //     'professional.id': 130,
                    //     'professional.professionalName': this.form.professionalName,
                    //     'professional.professionalDesc': this.form.professionalDesc

                    // }
                }, {
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded',
                    }
                }
            ).then((res) => {
                if (res.data.success == "true") {
                    alert("添加成功");
                    this.dialogFormVisible = false;
                    this.cha();
                } else {
                    alert("失败");
                }
                console.log(res)
            })
        },

        handleDelete: function (index, row) {
            this.$confirm('此操作将永久删除该数据, 是否继续?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                // this.tableData.splice(index, 1)
                // this.$message({
                //     type: 'success',
                //     message: '删除成功!',
                // })
                this.$axios.get(
                    "http://139.9.169.87:8081/examsystem/deleteCourse?id=" + row.id,

                ).then((res) => {
                    this.cha();
                    console.log(res)
                })
            }).catch(err => {
                this.$message({
                    type: 'error',
                    message: err
                })
            })
        },

        // document.onkeydown = function (e) {
        //     if (!e) e = window.event;
        //     if ((e.keyCode || e.which) == 13) {
        //         toQuote();
        //         //提交按钮触发的方法
        //     }
        // };

        handleEdit(row) {
            this.editFormVisible = true;
            // console.log(row)
            this.addForm = row
            this.indexRow = row.id;
        },
        //保存编辑
        sumbitEditRow() {
            alert(this.indexRow);
            this.$axios.post(
                "http://139.9.169.87:8081/examsystem/updateCourse?id=" + this.indexRow + "&courseName=" + this.addForm.courseName + "&courseDesc=" + this.addForm.courseDesc + "&professional.id=" + this.addForm.professional.id + "&professional.professionalName=" + this.addForm.professional.professionalName + "&professional.professionalDesc=" + this.addForm.professional.professionalDesc, {}, {
                    headers: {
                        'content-type': 'application/x-www-form-urlencoded'
                    },
                }
            ).then((res) => {
                console.log(res)
                if (res.data.success == "true") {
                    alert('修改成功');
                } else {
                    alert('修改失败');
                }
            })
            this.editFormVisible = false;
        },
    },

    created() {
        this.cha();
    }
}
</script>
